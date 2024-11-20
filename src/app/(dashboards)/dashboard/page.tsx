'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { FaRegEyeSlash } from 'react-icons/fa';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Link from 'next/link';
import axios from "../../../utils/axios"

const LiveCoinWatchWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="livecoinwatch-widget-5"
      lcw-base="USD"
      lcw-color-tx="#999999"
      lcw-marquee-1="coins"
      lcw-marquee-2="movers"
      lcw-marquee-items="10"
    ></div>
  );
};


const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [downlineData, setDownlineData] = useState<any>([]);
  const [totalAmount, setTotalAmount] = useState(0.00);

  interface ProfileData {
    name: string;
    email: string;
    balance: number;
    profit: number;
    deposited: number;
    // Add more profile fields as needed
  }
const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const [balance, setBalance] = useState(0);
  useEffect(() => {

    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        setProfileData(response.data);
        setBalance(response.data.balance)
        console.log(profileData)
      } catch (error: any) {
      } finally {
      }
    };

    fetchProfileData();

    const fetctDownlines = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('/user/downlines', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        setDownlineData(response.data);
        console.log(response.data);
      } catch (error: any) {
      } finally {
      }
    };

    fetctDownlines();

  //   const fetchWithdrawals = async () => {
  //     const response = await axios.get(`/user/withdrawals`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  //     });

  //     if (response.data && response.data.length > 0) { // Assuming response.data is an array
  //       const newTotalAmount = response.data.reduce(
  //         (sum: number, item: { amount: number }) => sum + item.amount, 
  //         0
  //     );          
  //     setTotalAmount(newTotalAmount)
  //   }
  // }

  const fetchWithdrawals = async () => {
    const response = await axios.get(`/user/withdrawals`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
  
    if (response.data && response.data.length > 0) { // Assuming response.data is an array
      const newTotalAmount = response.data
        .filter((item: { status: string }) => item.status !== "pending") // Exclude pending items
        .reduce((sum: number, item: { amount: number }) => sum + item.amount, 0);
        
      setTotalAmount(newTotalAmount);
    }
  };
    fetchWithdrawals()
  }, [profileData]); // Empty dependency array ensures this runs only once on mount

  return (
    <Box className="p-6">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card className="bg-[#003b2f] text-white rounded-lg p-4 py-5 shadow-md">
            <CardContent>
              <Box className="flex justify-between items-center">
                <Typography variant="h6" className='text-[12px] flex items-center space-x-2'>
                  <Typography variant='caption'> Wallet Balance</Typography> 
                  <FaRegEyeSlash onClick={toggleBalanceVisibility} />
                </Typography>
                <Link href={"/dashboard/transactions"} >
                  <Typography variant="h6" className='text-[12px] flex items-center space-x-0'>
                    <Typography variant='caption'> Transaction History</Typography> 
                    <KeyboardArrowRightOutlinedIcon  />
                  </Typography>
                </Link>

              </Box>

              <Typography variant="h4" className="font-bold my-2 text-[20px]">
                {
                  showBalance ? `$${balance}.00` : "***"
                }
              </Typography>
              {/* <Typography variant="h4" className="font-bold my-2 text-[20px]">
                {profileData?.balance ? (showBalance ? `$${balance}.00` : "***") : "0.00"}
              </Typography> */}

              <Grid container spacing={2}>
                <Grid item xs={4} className='text-center'>
                <Link href={"/dashboard/deposit"} >
                  <Button variant="contained" className="text-[12px] bg-white text-[#003b2f] w-full hover:bg-[#005b49] hover:text-white px-1">
                    <AddCircleOutlineOutlinedIcon />
                  </Button>
                  </Link>
                  <span className='text-[10px]'>Top up Balance</span>
                </Grid>
                <Grid item xs={4} className='text-center'>
                <Link href={"/dashboard/investment"} >
                  <Button variant="contained" className="text-[12px] bg-white text-[#003b2f] w-full hover:bg-[#005b49] hover:text-white">
                    <StackedLineChartOutlinedIcon />
                  </Button>
                  </Link>
                  <span className='text-[10px]'>Invest now</span>
                </Grid>
                <Grid item xs={4} className='text-center'>
                <Link href={"/dashboard/withdraw"} >
                  <Button variant="contained" className="text-[12px] bg-white text-[#003b2f] w-full hover:bg-[#005b49] hover:text-white">
                    <CompareArrowsOutlinedIcon />
                  </Button>
                  </Link>
                  <span className='text-[10px]'>Withdraw</span>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card className="bg-white rounded-lg p-4 py-7  shadow-lg">
            <CardContent>
              <Typography variant="h6" className="font-bold">Refer & Earn 🎁</Typography>
              <Typography variant="body2" className="my-2">
                Earn up to $100 when your friend joins and invests with us.
              </Typography>
              <Link href={"/dashboard/referrals"} >
                <Button variant="outlined" className="border-[#003b2f] text-[#003b2f] w-full hover:bg-[#005b49] hover:text-white">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} >
          <Card className="bg-white rounded-lg p-4 py-1 shadow-md border-l border-spacing-2 border-[#1f5f4b]">
            <CardContent>
              <Typography variant="h6" className='text-[12px]'>Total Profit</Typography>
              <Typography variant="h4" className="font-bold my-2">${profileData?.profit}.00</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white rounded-lg p-4 py-1 shadow-md border-l border-spacing-2 border-[#003b2f]">
            <CardContent>
              <Typography variant="h6" className='text-[12px]'>Total Deposit</Typography>
              <Typography variant="h4" className="font-bold my-2">${profileData?.deposited}.00</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white rounded-lg p-4 py-1 shadow-md border-l border-spacing-2 border-[#88f5df]">
            <CardContent>
              <Typography variant="h6" className='text-[12px]'>Total Bonus</Typography>
              <Typography variant="h4" className="font-bold my-2">$0.00</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="bg-white rounded-lg p-4 py-1 shadow-md border-l border-spacing-2 border-[#378bad]">
            <CardContent>
              <Typography variant="h6" className='text-[12px]'>Refferal</Typography>
              <Typography variant="h4" className="font-bold my-2">{downlineData.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="bg-white rounded-lg p-4 py-1 shadow-md border-l border-spacing-2 border-[#caad46]">
            <CardContent>
              <Typography variant="h6" className='text-[12px]'>Total Withdrawal</Typography>
              <Typography variant="h4" className="font-bold my-2">${totalAmount}.00 </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};


function page() {
  return (
    <div className=''>
      <LiveCoinWatchWidget />
      <Dashboard />
    </div>
  )
}

export default page