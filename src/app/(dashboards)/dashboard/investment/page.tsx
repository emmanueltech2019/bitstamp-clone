"use client"
import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import Img from "../../../nav/img/invest.png";
import Image from 'next/image';
import Link from 'next/link';
import axios from "../../../../utils/axios"
import Swal from 'sweetalert2';
// import { Investments } from '@/types'; // Assuming this is your type
import { ArrowForward, TrendingUp, AccessTime, CalendarToday } from '@mui/icons-material';

// --- Card Component Refactoring ---
function NoActiveInvestment() {

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
  interface Investments {
    amount: number;
    asset: string;
    status: string;
    date: string;
    duration: string;
    plan: string;
    _id: any;
  }
const [investments, setInvestments] = useState<Investments[]>([]);
  useEffect(() => {
    const placedInvestments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('/user/user-investments', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response);
        setInvestments(response.data)

      } catch (error: any) {
        // Handle errors
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: error.response?.data.message || 'An error occurred.'
        });
        console.error('Investment error:', error.response?.data);
      }
    };

    placedInvestments();
  }, []);
  
  return (
    <>
      {investments.length >0 ? 
      <>
      {/* <Box className="flex flex-col items-center justify-center h-full bg-gray-100 overflow-y-auto">
      {investments.map((investment: Investments, index:number) =>(
        <Card key={index} className="bg-white rounded-lg p-4 my-2 w-[400px] py-0 shadow-md border-l border-spacing-2 border-[#003b2f]">
          <CardContent>
            <Typography variant="h6" className='font-semibold my-1'>ASSET: {investment.asset}</Typography>
            <Typography variant="h6" className="font-semibold my-1">AMOUNT: ${investment.amount}.00</Typography>
            <Typography variant="h6" className='font-semibold my-1'>PLAN: {investment.plan}</Typography>
            <Typography variant="h6" className="font-semibold my-1">DURATION: {investment.duration}</Typography>
            <Typography variant="h6" className='font-semibold my-1'>START DATE : {investment.date.split("T")[0]}</Typography>
            <Typography variant="h5" className="font-semibold my-1 text-[#3bb758] uppercase">{investment.status}</Typography>
          </CardContent>
        </Card>
      ))}
      <Link href={'/dashboard/investment/plan'}>
        <Button variant="contained" color="primary" className="px-8 my-10 py-2 rounded-md text-white font-medium bg-[#003b2f] hover:bg-[#003b2f]">
         Add Investment
        </Button>
      </Link>
      </Box> */}


<Box className="flex flex-col items-center justify-center min-h-screen bg-gray-200 overflow-y-auto p-4">
  {investments.map((investment: Investments, index: number) => (
    // Use a Link wrapper for the whole card to make it clickable
    <Link 
      key={index} 
      href={`/dashboard/trading?id=${investment._id}`} // Dynamic route to a trading page
      passHref
      className="w-full max-w-lg my-3 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      <Card className="bg-gray-800 text-white rounded-xl border-2 border-green-500/20 shadow-lg cursor-pointer">
        <CardContent className="p-5 flex flex-col space-y-3">
          
          {/* Asset Header & Status */}
          <div className="flex justify-between items-center pb-2 border-b border-gray-700">
            <Typography variant="h4" className='font-extrabold text-green-400'>
              {investment.asset} <span className='text-lg font-normal text-gray-400'>/ USD</span>
            </Typography>
            <div className={`
              px-3 py-1 text-sm font-bold rounded-full 
              ${investment.status.toLowerCase() === 'running' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}
              uppercase tracking-wider
            `}>
              {investment.status}
            </div>
          </div>
          
          {/* Amount & Plan */}
          <div className="flex justify-between items-center pt-2">
            <div>
              <Typography variant="body2" className="text-gray-400 uppercase tracking-widest">
                Invested Amount
              </Typography>
              <Typography variant="h5" className="font-bold text-white mt-1">
                ${investment.amount}.00
              </Typography>
            </div>
            <div className="text-right">
              <Typography variant="body2" className='text-gray-400 uppercase tracking-widest'>
                Investment Plan
              </Typography>
              <Typography variant="h5" className="font-bold text-cyan-400 mt-1">
                {investment.plan}
              </Typography>
            </div>
          </div>
          
          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-700">
            
            {/* Duration */}
            {/* <div className="flex items-center space-x-2">
              <AccessTime className="text-green-500 w-5 h-5" />
              <div>
                <Typography variant="body2" className='text-gray-500 text-xs uppercase'>Duration</Typography>
                <Typography variant="body1" className="font-medium text-gray-300">
                  {investment.duration}
                </Typography>
              </div>
            </div> */}
            
            {/* Start Date */}
            {/* <div className="flex items-center space-x-2">
              <CalendarToday className="text-green-500 w-5 h-5" />
              <div>
                <Typography variant="body2" className='text-gray-500 text-xs uppercase'>Start Date</Typography>
                <Typography variant="body1" className="font-medium text-gray-300">
                  {investment.date.split("T")[0]}
                </Typography>
              </div>
            </div> */}
            
            {/* Action Indicator (Simulated ROI) */}
            <div className="col-span-2 flex justify-between items-center border-t border-gray-700 pt-3 mt-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-500 w-6 h-6" />
                <Typography variant="body1" className="text-lg font-semibold text-green-400">
                  View Mirror Trade
                </Typography>
              </div>
              <ArrowForward className="text-green-400 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
            
          </div>
          
        </CardContent>
      </Card>
    </Link>
  ))}
  
  {/* Add Investment Button - Styled for the dark theme */}
  <Link href={'/dashboard/investment/plan'}>
    <Button 
      variant="contained" 
      className="px-8 my-10 py-3 rounded-xl text-white font-bold bg-green-600 hover:bg-green-700 shadow-lg transition-colors"
    >
      <span className="text-lg">ADD NEW INVESTMENT</span>
    </Button>
  </Link>
</Box>
      </> : <>
      <Box className="flex flex-col items-center justify-center h-[84vh] bg-gray-100">
      <Image src={Img} alt="Person sitting on a stack of coins with a laptop"
        className="w-96 mb-8"
      />

      <Typography variant="h5" component="h2" className="font-semibold mb-2 text-gray-800">
        No Active Investment
      </Typography>
      <Typography variant="body1" className="text-center text-gray-600 mb-6">
        You currently do not have an active investment. Kindly click the button below to get started.
      </Typography>

      <Link href={'/dashboard/investment/plan'}>
        <Button variant="contained" color="primary" className="px-8 py-2 rounded-md text-white font-medium bg-[#003b2f] hover:bg-[#003b2f]">
          Start Investing
        </Button>
      </Link></Box></>}
      </>
    
  );
}

export default NoActiveInvestment;
