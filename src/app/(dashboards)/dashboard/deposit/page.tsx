"use client"
import React, { useEffect, useState, FormEvent } from 'react';
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
  Modal
} from '@mui/material';
import Btc from "../../../nav/img/bitcoin.png";
import Eth from "../../../nav/img/ethereum.png";
import Usdt from "../../../nav/img/tether.png";
import Ltc from "../../../nav/img/digital.png";
import Image from 'next/image';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Paxful from "../../../nav/img/paxful.png";
import Binance from "../../../nav/img/binance.png";
import Cryptocom from "../../../nav/img/cryto.png";
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // For the copy icon
import axios from 'axios';
import Swal from "sweetalert2";
import { useRouter } from 'next/navigation';
import axios2 from '../../../../utils/axios';
import Link from 'next/link';


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Deposit() {
  const [selectedOption, setSelectedOption] = useState('manual');
  const [amount, setAmount] = useState<number | string>(100);
  const [totalAmount, setTotalAmount] = useState(0.00);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  // const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  // const [isAvatarError, setIsAvatarError] = useState(false); 

  // const handleAvatarError = () => {
  //   setIsAvatarError(true); 
  // };

  const [selectedCryptos, setSelectedCryptos] = useState<string | null>(null)
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [crptoEquivalent, setCrptoEquivalent]  = useState<number>(0)
  // const handleCryptoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const crypto = event.target.name;
  //   setSelectedCryptos(prevCryptos => {
  //     if (prevCryptos.includes(crypto)) {
  //       return prevCryptos.filter(c => c !== crypto);
  //     } else {
  //       return [...prevCryptos, crypto];
  //     }
  //   });
  // };

  // const handleCryptoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedCryptos(event.target.checked ? event.target.name : null);
  //   const selectedOption = cryptoOptions.find(
  //     (option) => event.target.name === option.label
  //   );
  //   setSelectedWallet(selectedOption ? selectedOption.wallet : null);

  // };

  const cryptoOptions = [
    { label: 'Bitcoin (BTC)', icon: Btc, wallet:"bc1qv3t3nelvutvmttu3qh4jjphljd365d37c4l9k7" },
    { label: 'Ethereum (ETH)', icon: Eth, wallet:"0x4742FFebB9eD23635AA8A598d511c4F7e150dC83" },
    { label: 'Tether US (USDT)', icon: Usdt, wallet:"TXf3FUkX9WqXeC83YeHFQPgoKybgCBDs9p" },
    { label: 'Litecoin (LTC)', icon: Ltc, wallet:"ltc1qezl5hum4kfey74ahame7m23h79fngxqpegeu8s" },
  ];


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log(selectedCryptos)
    if(selectedCryptos !== ""  && selectedWallet !== "" && selectedCryptos !== null  && selectedWallet !== null ) {
      setOpen(true);
      let config = {
            method: 'get',
          maxBodyLength: Infinity,
          url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Clitecoin%2Cbinancecoin%2Ccardano%2Caave%2Cbitcoin-cash%2Cstellar%2Cmonero%2Cdogecoin%2Cripple%2Czcash%2Cravencoin%2Cdash&vs_currencies=usd"
            // url: 'https://rest.coinapi.io/v1/exchangerate/:asset_id_base',
            // headers: { 
            //   'Accept': 'application/json', 
            //   'X-CoinAPI-Key': `B58AEEEF-34BF-420F-AF53-FD1A087AEA9F`
            // }
          };
          
          axios(config)
          .then((response) => {
            if(selectedCryptos=="Bitcoin (BTC)"){
              setCrptoEquivalent(response.data.bitcoin.usd)
            }
            if(selectedCryptos=="Ethereum (ETH)"){
              setCrptoEquivalent(response.data.ethereum.usd)
            }
            if(selectedCryptos=="Litecoin (LTC)"){
              setCrptoEquivalent(response.data.litecoin.usd)
            }
            if(selectedCryptos=="Tether (USDT)"){
              setCrptoEquivalent(response.data.tether.usd)
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }else{
      Toast.fire({
        icon: "warning",
  title: "Please select payment method"
      })
    }
  }
  const handleClose = () => setOpen(false);

  const [paymentType, setPaymentType] = useState('USD'); 
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios2.post('/user/deposit',{amount,currency:selectedCryptos},{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      } ).then(()=>{
        setOpen(false)
         Toast.fire({
          icon: "warning",
          text: "Your deposit is been processed",
          timer: 2000
        });
    
        router.refresh();
      })
      

    } catch (error: any) {
      Toast.fire({
        icon: "error",
        text:"Your deposit was unsuccessful",
        timer: 2000
      })
      .then(()=>router.refresh())
      // Handle login errors (e.g., invalid credentials)
      // console.error('Login error:', error.response?.data); 
      // setError(error.response?.data.message || 'An error occurred.');
    }
  };

  
  // useEffect(() => {
  //   const fetchDeposits = async () => { 
  //     try {
  //       const response = await axios2.get(`/user/deposits`, {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  //       });
  //       console.log(response)
  //       if (response.data && response.data.length > 0) { // Assuming response.data is an array
  //         const newTotalAmount = response.data.reduce(
  //           (sum: number, item: { amount: number }) => sum + item.amount, 
  //           0
  //       );          
  //       setTotalAmount(newTotalAmount)


  //       } else {
  //         console.log("No deposits found."); 
  //       }
  //     } catch (error) {
  //       console.error("Error fetching deposits:", error);
  //     }
  //   };
  
  //   fetchDeposits();
  
  //   return () => {
  //     // Cleanup logic (if needed)
  //   };
  // }, [totalAmount]); // Empty dependency array means this runs once after initial render

  useEffect(() => {
    const fetchDeposits = async () => { 
      try {
        const response = await axios2.get(`/user/deposits`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
        console.log(response);
        
        if (response.data && response.data.length > 0) { 
          // Filter the deposits to include only approved ones
          const approvedDeposits = response.data.filter(
            (item: { status: string }) => item.status === "approved"
          );
          
          // Calculate the total amount for only approved deposits
          const newTotalAmount = approvedDeposits.reduce(
            (sum: number, item: { amount: number }) => sum + item.amount, 
            0
          );          
          setTotalAmount(newTotalAmount);
        } else {
          console.log("No deposits found."); 
        }
      } catch (error) {
        console.error("Error fetching deposits:", error);
      }
    };
  
    fetchDeposits();
  
    return () => {
      // Cleanup logic (if needed)
    };
  }, [totalAmount]); // Empty dependency array means this runs once after initial render
  
  return (
    <div className='sm:flex space-y-2'>
      


      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
        <Box sx={style} className="rounded-lg shadow-md">
          <h2 id="modal-modal-title" className="text-xl font-semibold mb-4">Deposit</h2>
          <p id="modal-modal-description" className="mb-2">
            You are to make a deposit of ${amount} USD into provided address.
          </p>
          <div className="flex items-center mb-4">
            <TextField
              fullWidth
              defaultValue={selectedWallet}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <Button size="small" onClick={() => {
                    if (selectedWallet) {
                      navigator.clipboard.writeText(selectedWallet);
                    }
                  }}>
                    <ContentCopyIcon />
                  </Button>
                ),
              }}
            /> 
          </div>

          <p className="mb-2">Hey 👋 Kindly upload your proof of payment when you&apos;ve made payment</p>

          <div className="flex space-x-4 mb-4">
            <div className='flex flex-col'>
           
            <div className="mb-4">
            <TextField
              fullWidth
              label={paymentType === 'USD' ? 'Pay in USD' : 'Enter Bitcoin amount'}
              type={paymentType === 'USD' ? 'number' : 'text'}
              value={amount}
              InputLabelProps={{ shrink: !!crptoEquivalent }}
              variant="outlined"
              disabled
            />
          </div>
            </div>
            <div className='flex flex-col'>
            <label onClick={() => setPaymentType('USD')}>
           
            </label>
            <div className="mb-4">
            <TextField
            variant="outlined"
              fullWidth
              label={paymentType === 'USD' ? ` Pay in ${selectedCryptos}` : 'Enter Bitcoin amount'}
              type={paymentType === 'USD' ? 'number' : 'text'}
              value={Math.floor((amount as number /crptoEquivalent) * 1e6)/ 1e6}
              InputLabelProps={{ shrink: !!crptoEquivalent }}
              disabled
            />
          </div>
          </div>

          </div>
          
          <div className="flex justify-between">
            <Button variant="contained" color="success" type='submit'>I have paid</Button>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Box>

        </form>
      </Modal>
    </div>








        <Container maxWidth="sm" className="h-fit flex flex-col justify-center items-center text-center">
        <Box className="bg-white p-2 sm:p-8 rounded-lg shadow-lg">
        <Box className="p-4">
        <Typography variant="h6" component="h2" className="mb-2 font-extrabold">
            DEPOSIT
        </Typography>

        <Typography className="mb-2 text-[11px] pb-10">Choose your preferred payment option</Typography>
{/* 
        <RadioGroup value={selectedOption} onChange={handleOptionChange} className="mb-4 flex flex-row justify-center">
            <FormControlLabel
            value="manual"
            
            control={<Radio  className="" sx={{
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
            control={<Radio className=""   
              onClick={()=>alert("nj")}
            sx={{
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
        </RadioGroup> */}
        <select
          value={selectedOption}
          onChange={handleChange}
          className="mb-4 w-full p-2 rounded border border-gray-300"
        >
          <option value="manual">Manual Deposit</option>
          <option value="card">Card Payment</option>
        </select>
        {selectedOption === 'manual' && (
            <>
            <Box className="mb-4">
            <Typography className="mb-2 ">Select Amount</Typography>
            <Slider
                value={amount as number}
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
                type='number'
                value={amount}
                
                onChange={(e) => {
                  let inputValue = e.target.value;
              
                  // Check if the input is empty, then set it to 0
                  if (inputValue === '') {
                    setAmount('');
                  } else {
                    let amount = inputValue;
                    setAmount(amount);
                    // If amount is NaN or less than 0, set it to 0, otherwise set the parsed amount
                    // if (isNaN(amount) || amount < 0) {
                    //   setAmount(0);
                    // } else {
                    //   setAmount(amount);
                    // }
                  }
                }}
            />
            </FormControl>
            </Box>
            <Typography className="mb-2">Select Payment Method</Typography>
            <Box className="p-4 text-left">
            <Grid container spacing={2}>
  {cryptoOptions.map((option) => (
    <Grid item xs={6} key={option.label}>
      <Button
        onClick={() => {
          setSelectedCryptos(option.label);
          setSelectedWallet(option.wallet);
        }}
        sx={{
          width: "100%", // Make the button take the full width of the grid item
          justifyContent: "flex-start", // Align content to the start (left)
          textTransform: "none", // Don't capitalize the button text
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCryptos === option.label}
              onChange={() => {
                setSelectedCryptos(option.label);
                setSelectedWallet(option.wallet);
              }}
              name={option.label}
              id='cryptoType'
            />
          }
          label={
            <Box className="flex items-center space-x-2">
              <Image src={option.icon} alt={option.label} className='w-10' />
              <Typography className='text-[11px]'>{option.label}</Typography>
            </Box>
          }
        />
      </Button>
    </Grid>
  ))}
</Grid>
        </Box>

        <Button variant="contained" onClick={handleOpen} fullWidth className="mt-4 bg-[#003b2f] hover:bg-[#003b2f]">
            Proceed to Payment
        </Button>
            </>
        )}

        {selectedOption == 'card' && (
            <Container maxWidth="sm" className="h-fit flex flex-col justify-center items-center text-center">
            <Box className="bg-white p-8 rounded-lg shadow-lg">
            <Typography variant="h3" className="font-bold mb-4">
                Coming Soon
            </Typography>
            <Typography variant="body1" className="text-gray-600">
                We&lsquo;re working hard to bring you something amazing. Stay tuned!
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
        ${totalAmount}
      </Typography>
        <Link href={"/dashboard/transactions"} >
          <Button variant="contained" fullWidth className="mb-4 bg-[#003b2f] hover:bg-[#003b2f] text-[12px]">
            View Deposit History
          </Button>
        </Link>

      <Divider />

      <Typography className="mt-4 mb-2 pt-5 ">
        Don&lsquo;t have cryptocurrency?
      </Typography>
      {/* <Button variant="outlined" color="error" fullWidth className="mb-5">
        Buy Now
      </Button> */}

      <Typography className="font-medium mb-2">
        Purchase from Trusted Exchange
      </Typography>
      <Box className="flex flex-col space-y-2">
        <Link href="https://www.paxful.com" className="flex items-center space-x-3 text-[#1a1a1a]">
          <Image src={Paxful} className="w-10 h-10" alt="" />
          <p>Paxful</p>
        </Link>
        <Link href="https://www.binance.com" className="flex items-center space-x-3 text-[#1a1a1a]">
        <Image src={Binance} className="w-10 h-10" alt="" />
          <p>Binance</p>
        </Link>
        <Link href="https://www.crypto.com" className="flex items-center space-x-3 text-[#1a1a1a]">
        <Image src={Cryptocom} className="w-10 h-10" alt="" />
          <p>Crypto.com</p>
          
        </Link>
      </Box>
    </Box>
    </div>
  );
}

export default Deposit;








