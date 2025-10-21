"use client"
import * as React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  Container,
} from '@mui/material';
import axios from '../../../../../utils/axios';
import Swal from 'sweetalert2';

function InvestmentComponent() {
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
  const [investmentPlan, setInvestmentPlan] = React.useState('ROI');
  const [duration, setDuration] = React.useState('7 Days');
  const [asset, setAsset] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  const quickAmounts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, 5000, 10000, 50000, 100000];

  const handleChangePlan = (event: React.MouseEvent<HTMLElement>, newAlignment: number) => {
    setAmount(Number(newAlignment))
  };
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    // setInvestmentPlan(newAlignment);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) =>{
    event.preventDefault();
    console.log(investmentPlan, duration, asset, amount);
    try {
      const response = await axios.post('/user/purchase', {amount, asset, duration, plan:investmentPlan }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      }); // Your login API endpoint

      // Handle successful login (e.g., store token, redirect)
      // console.log('Login successful:', response.data);
      // localStorage.setItem('token', response.data.token); // Example token storage
      Toast.fire({
        icon:'success',
        title: 'Investment Placed Successfully'
      }).then(()=>window.location.href='/dashboard/investment')
      // window.location.href='/dashboard' // Redirect example (replace with your route)
    } catch (error: any) {
      // Handle login errors (e.g., invalid credentials)
      Toast.fire({
        icon: 'error',
        title: error.response?.data.message
      })
      console.error('Login error:', error.response?.data); 
      // setError(error.response?.data.message || 'An error occurred.');
    }
  }

  return (
    <Container maxWidth="lg" className="h-fit flex flex-col justify-center items-center text-center">
        <Box className="bg-white p-2 sm:p-8 rounded-lg shadow-lg">
    <Box className="p-4">
      <Typography variant="h5" className="font-semibold mb-4">
        Get started with your investment.
      </Typography>
      <Typography variant="body1" className="mb-6">
        An investment has never been easy but with MirrorTradeX Trade, we have made it simple with mega returns
      </Typography>
    <form onSubmit={handleSubmit}>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section */}
        <Box className="p-4 bg-white rounded-md shadow-md">
          <FormControl fullWidth>
            <InputLabel id="investment-plan-label">Investment Plan</InputLabel>
            <Select
              labelId="investment-plan-label"
              id="investment-plan"
              value={investmentPlan}
              label="Investment Plan"
              onChange={(e) => setInvestmentPlan(e.target.value)}
            >
              <MenuItem value={"ROI"} selected>ROI</MenuItem>
              <MenuItem value={"CYCLE"}>Return Cycle</MenuItem>
            </Select>
          </FormControl>

          <Typography className="mt-4 mb-2">Select from quick amount</Typography>
          <ToggleButtonGroup
            value={investmentPlan}
            exclusive
            onChange={handleChangePlan}
            aria-label="investment plan"
            className="mb-4 grid grid-cols-5 gap-2"
          >
            {quickAmounts.map((amount) => (
              <ToggleButton key={amount} value={amount} className="text-[#fff] bg-[#003b2f] hover:bg-[#215248]">
                ${amount}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Typography className="mt-4 mb-2">Or Enter Your Amount</Typography>
          <TextField label="Amount to invest" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} fullWidth className="mb-4" />

          <FormControl fullWidth>
            <InputLabel id="asset-label">Choose Asset</InputLabel>
            <Select
              labelId="asset-label"
              id="asset"
              value={asset}
              label="Choose Asset"
              onChange={(e) => setAsset(e.target.value)}
            >
              <MenuItem value={"BTC"}>Bitcoin (BTC)</MenuItem>
              <MenuItem value={"ETH"}>Etherium (ETH)</MenuItem>
              <MenuItem value={"USDT"}>USDT (TRC20)</MenuItem>
              <MenuItem value={"LTC"}>Litecoin (LTC)</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Right Section */}
        <Box className="p-4 bg-white rounded-md shadow-md">
          <Typography variant="h6" className="font-semibold mb-2">
            Checkout
          </Typography>

          <Box className="grid grid-cols-2 gap-2 mb-4">
            {[
              { label: 'Investment Plan', value: investmentPlan },
              { label: 'Duration', value: investmentPlan === 'roi' ? '30 Days' : "7 days" },
              { label: 'Minimum Deposit', value: '$100' }, 
              { label: 'Maximum Deposit', value: '$100000' }, // Adjust as needed
              { label: 'ROI', value: investmentPlan === 'roi' ? '10%' : "8%" }, // Conditionally render
              { label: 'Return Cycle', value: investmentPlan === 'cycle' ? 'Monthly' : "Weekly" }, // Conditionally render
              { label: 'Asset', value: asset }
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <Typography variant="body2" className="text-gray-600">
                  {item.label}
                </Typography>
                <Typography>{item.value}</Typography>
              </div>
            ))}
          </Box>

          <Typography className="mb-2">Amount to Invest: ${amount}</Typography> 
          <Button variant="contained" color="primary" type='submit' fullWidth className="mt-4 bg-[#003b2f] hover:bg-[#003b2f]">
            Confirm & Invest
          </Button>
        </Box>
      </Box>

    </form>
    </Box>
    </Box>
    </Container>
  );
}

export default InvestmentComponent;
