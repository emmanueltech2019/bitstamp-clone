"use client"
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Slider,
  Avatar,
  Grid,
  Container,
  Divider,
  Link
} from '@mui/material';
import Btc from "../../../nav/img/bitcoin.png"
import Eth from "../../../nav/img/ethereum.png"
import Usdt from "../../../nav/img/tether.png"
import Ltc from "../../../nav/img/digital.png"
import Image from 'next/image';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Paxful from "../../../nav/img/paxful.png"
import Binance from "../../../nav/img/binance.png"
import Cryptocom from "../../../nav/img/cryto.png"

function Deposit() {
  const [selectedOption, setSelectedOption] = useState('manual');
  const [amount, setAmount] = useState(100);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const [isAvatarError, setIsAvatarError] = useState(false); 

  const handleAvatarError = () => {
    setIsAvatarError(true); 
  };

  const [selectedCryptos, setSelectedCryptos] = useState<string[]>([]);
  
  const handleCryptoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const crypto = event.target.name;
    setSelectedCryptos(prevCryptos => {
      if (prevCryptos.includes(crypto)) {
        return prevCryptos.filter(c => c !== crypto);
      } else {
        return [...prevCryptos, crypto];
      }
    });
  };

  const cryptoOptions = [
    { label: 'Bitcoin (BTC)', icon: Btc },
    { label: 'Ethereum (ETH)', icon: Eth },
    { label: 'Tether US (USDT)', icon: Usdt },
    { label: 'Litecoin (LTC)', icon: Ltc },
  ];

  return (
    <div className='sm:flex space-y-2'>
        <Container maxWidth="sm" className="h-fit flex flex-col justify-center items-center text-center">
        <Box className="bg-white p-2 sm:p-8 rounded-lg shadow-lg">
        <Box className="p-4">
        <Typography variant="h6" component="h2" className="mb-2 font-extrabold">
            DEPOSIT
        </Typography>

        <Typography className="mb-2 text-[11px]">Choose your preferred payment option</Typography>

        <RadioGroup value={selectedOption} onChange={handleOptionChange} className="mb-4 flex flex-row justify-center">
            <FormControlLabel
            value="manual"
            control={<Radio className="" sx={{
                color: "#003b2f",
                '&.Mui-checked': {
                color: "#fff", 
                backgroundColor:"#003b2f"
                }
            }}/>}
            label="Manual Deposit"
            className="mb-2 w-fit p-2 pr-5 rounded-full "
            sx={{
                color: "#003b2f",
                borderColor:"#003b2f",
                borderWidth:"1px",
                '&.Mui-checked': {
                color: "#005b49", 
                backgroundColor:"#003b2f"
                }
            }}
            />
            <FormControlLabel
            value="card"
            control={<Radio className="" sx={{
                color: "#003b2f",
                '&.Mui-checked': {
                color: "#fff", 
                backgroundColor:"#003b2f"
                }
            }}/>}
            label="Card Payment"
            className="mb-2  w-fit p-2 pr-5 rounded-full "
            sx={{
                color: "#003b2f",
                borderColor:"#003b2f",
                borderWidth:"1px",
                '&.Mui-checked': {
                color: "#005b49", 
                backgroundColor:"#003b2f"
                }
            }}
            />
        </RadioGroup>

        {selectedOption === 'manual' && (
            <>
            <Box className="mb-4">
            <Typography className="mb-2 ">Select Amount</Typography>
            <Slider
                value={amount}
                onChange={(event, newValue) => setAmount(newValue as number)}
                valueLabelDisplay="auto"
                step={100} // Set the step to 100
                min={100}  // Set the minimum value to 100
                max={100000} // Or whatever your desired maximum is
                color="success"
                aria-label="Temperature"
            defaultValue={30}
            // getAriaValueText={valuetext}
            shiftStep={30}

            marks

            />
            <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Amount"
                value={amount}
                
            />
            </FormControl>
            </Box>
            <Typography className="mb-2">Select Payment Method</Typography>
            <Box className="p-4 text-left">
        <Grid container spacing={2}>
            {cryptoOptions.map((option) => (
            <Grid item xs={6} key={option.label} >
                <FormControlLabel
                control={
                    <Checkbox
                    checked={selectedCryptos.includes(option.label)}
                    onChange={handleCryptoChange}
                    name={option.label} // Add name to identify crypto in handler
                    />
                }
                label={
                    <Box className="flex items-center space-x-2">
                    <Image src={option.icon} alt={option.label} className='w-10' sx={{ width: 10, height: 10, mr: 1 }} />
                    <Typography className='text-[11px]'>{option.label}</Typography>
                    </Box>
                }
                />
            </Grid>
            ))}
        </Grid>
        </Box>

        <Button variant="contained" fullWidth className="mt-4 bg-[#003b2f] hover:bg-[#003b2f]">
            Proceed to Payment
        </Button>
            </>
        )}

        {selectedOption === 'card' && (
            <Container maxWidth="sm" className="h-fit flex flex-col justify-center items-center text-center">
            <Box className="bg-white p-8 rounded-lg shadow-lg">
            <Typography variant="h3" className="font-bold mb-4">
                Coming Soon
            </Typography>
            <Typography variant="body1" className="text-gray-600">
                We're working hard to bring you something amazing. Stay tuned!
            </Typography>
            </Box>
        </Container>
        )}

        
        </Box>
        </Box>
        </Container>
        <Box className="p-4 rounded-md shadow-md border border-gray-200 mx-4">
      <Typography variant="h6" className="font-semibold mb-2">
        Total Deposit
      </Typography>
      <Typography variant="h5" className="font-bold mb-4 text-[13px]">
        $0.00
      </Typography>

      <Button variant="contained" fullWidth className="mb-4 bg-[#003b2f] text-[12px]">
        View Deposit History
      </Button>

      <Divider />

      <Typography className="mt-4 mb-2 pt-5 ">
        Don't have cryptocurrency?
      </Typography>
      {/* <Button variant="outlined" color="error" fullWidth className="mb-5">
        Buy Now
      </Button> */}

      <Typography className="font-medium mb-2">
        Purchase from Trusted Exchange
      </Typography>
      <Box className="flex flex-col space-y-2">
        <Link href="https://www.paxful.com" className="flex items-center space-x-3 text-[#1a1a1a]">
          <Image src={Paxful} className="w-10 h-10" />
          <p>Paxful</p>
        </Link>
        <Link href="https://www.binance.com" className="flex items-center space-x-3 text-[#1a1a1a]">
        <Image src={Binance} className="w-10 h-10" />
          <p>Binance</p>
        </Link>
        <Link href="https://www.crypto.com" className="flex items-center space-x-3 text-[#1a1a1a]">
        <Image src={Cryptocom} className="w-10 h-10" />
          <p>Crypto.com</p>
          
        </Link>
      </Box>
    </Box>
    </div>
  );
}

export default Deposit;
