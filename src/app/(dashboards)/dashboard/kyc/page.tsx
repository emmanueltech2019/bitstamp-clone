"use client"
import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Alert, AlertTitle } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormIll from "../../../nav/img/form-ill.jpg"
import Image from 'next/image';
import Link from 'next/link';
import axios2 from "../../../../utils/axios"

const TierTwoVerification: React.FC = () => {
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios2.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        console.log(response.data.verified)
        if(response.data.verified == "verified" || response.data.verified == "submitted"){        
            window.location.href = "/dashboard/kyc/kyc-submit"
        }
        // setFrontImage(response.data.kycVerification.frontImageUrl);
        // setBackImage(response.data.kycVerification.backImageUrl);
      } catch (error: any) {
      } finally {
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Box
    className="p-8 rounded-lg shadow-md mx-auto max-w-md bg-white" // Tailwind classes
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {/* Illustration (Replace with your actual image) */}
    <Image 
      src={FormIll}
      alt="KYC Verification Illustration"
      className="mb-4"
    /> 

    <Typography variant="h6" component="h2" className="mb-2">
      KYC Verification
    </Typography>

    <Typography variant="body1" className="text-center mb-4">
      With tier verification you stand a chance to increase your daily withdrawal limit.
      We encourage you to upload a clear and standard version of your preferred document.
    </Typography>

    <Link href={"/dashboard/kyc/kyc-submit"}>
      <Button 
        variant="contained" 
        color="primary"
        className="px-6 py-2 rounded-md text-sm font-medium bg-[#003b2f] hover:bg-[#003b2f]" // Tailwind classes
      >
        Click here for Verification
      </Button>
    </Link>
  </Box>
  );
};

export default TierTwoVerification;
