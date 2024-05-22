import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import Img from "../../../nav/img/invest.png";
import Image from 'next/image';
import Link from 'next/link';
function NoActiveInvestment() {
  return (
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
      </Link>
    </Box>
  );
}

export default NoActiveInvestment;
