"use client"
import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import Img from "../../../nav/img/invest.png";
import Image from 'next/image';
import Link from 'next/link';
import axios from "../../../../utils/axios"
import Swal from 'sweetalert2';

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
      <Box className="flex flex-col items-center justify-center h-full bg-gray-100 overflow-y-auto">
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
