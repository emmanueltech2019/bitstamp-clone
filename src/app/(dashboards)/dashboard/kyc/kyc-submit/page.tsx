"use client"
import React, {FormEvent, useEffect, useState} from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Alert, AlertTitle } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';
import axios2 from "../../../../../utils/axios"

import Swal from "sweetalert2"
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
const TierTwoVerification: React.FC = () => {
  const [frontImage, setFrontImage] = useState<File | null | string>(null);
  const [backImage, setBackImage] = useState<File | null | string>(null);
  const [hide, setHide] = useState< boolean >(false);

  const onDropFront = (acceptedFiles: File[]) => {
    setFrontImage(acceptedFiles[0]);
  };

  const onDropBack = (acceptedFiles: File[]) => {
    setBackImage(acceptedFiles[0]);
  };

  const { getRootProps: getFrontRootProps, getInputProps: getFrontInputProps } = useDropzone({
    onDrop: onDropFront,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const { getRootProps: getBackRootProps, getInputProps: getBackInputProps } = useDropzone({
    onDrop: onDropBack,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!frontImage) {
      alert('Please upload the front view of your ID.');
      return;
    }

    const formData = new FormData();
    formData.append('frontImage', frontImage);
    if (backImage) {
      formData.append('backImage', backImage);
    }
    console.log(formData);
    // alert("coool")

    try {
      // Replace with your actual API endpoint
      const response = await axios2.post('/user/verify-submit',
        formData,
        {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      console.log(response)
      if (response.status === 200 ){
        Toast.fire({
          icon: "success",
          message:"Please await verification"
        }).then((response)=>windows.location.reload())
      }
      // Handle the API response (success/error)
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios2.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        if(response.data.kycVerification.frontImageUrl){
          setHide(true)
        }
        setFrontImage(response.data.kycVerification.frontImageUrl);
        setBackImage(response.data.kycVerification.backImageUrl);
      } catch (error: any) {
      } finally {
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Box className="p-6">
      <Typography variant="h4" className="font-bold mb-4">
        TIER TWO VERIFICATION
      </Typography>
      <Alert severity="info" className="mb-4">
        <AlertTitle>{hide?"Pending verification":"Awaiting tier two verification"}</AlertTitle>
      </Alert>
      <Card className="rounded-lg shadow-md">
        <CardContent>
          <form onSubmit={handleSubmit}>
          <Typography variant="h5" className="font-bold mb-2 text-center">
            Tier two Verification (KYC)
          </Typography>
          <Typography variant="body2" className="text-center mb-4">
            Please kindly upload a government approved identification document. (ID Card, Driver licenses, and any other document.)
            <br />
            <span className="text-blue-600">
              Note: This can be rejected upon submission due to unclear format or wrong input
            </span>
          </Typography>
          <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
              <div {...getFrontRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"> {/* Use getRootProps here */}
                <input {...getFrontInputProps()} /> {/* Don't forget this! */}
                {frontImage ? (
  // Display image if frontImage is a File
  typeof frontImage === 'object' ? (
    <img src={URL.createObjectURL(frontImage)} alt="Front ID" className="w-full h-auto" />
  ) : (
    // Display image directly if frontImage is a URL
    <img src={frontImage} alt="Front ID" className="w-full h-auto" />
  )
) : (
  // Display the upload prompt if no image
  <>
    <CloudUploadIcon fontSize="large" className="text-gray-400" />
    <Typography variant="body1" className="mt-2 text-gray-600">
      Drag and drop or Tap to upload the front view
    </Typography>
  </>
)}
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div {...getBackRootProps()} className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"> {/* Use getRootProps here */}
                <input {...getFrontInputProps()} /> {/* Don't forget this! */}
                {backImage ? (
  // Display image if backImage is a File
  typeof backImage === 'object' ? (
    <img src={URL.createObjectURL(backImage)} alt="Front ID" className="w-full h-auto" />
  ) : (
    // Display image directly if backImage is a URL
    <img src={backImage} alt="Back ID" className="w-full h-auto" />
  )
) : (
  // Display the upload prompt if no image
  <>
    <CloudUploadIcon fontSize="large" className="text-gray-400" />
    <Typography variant="body1" className="mt-2 text-gray-600">
      Drag and drop or Tap to upload the back view
    </Typography>
  </>
)}
              </div>
            </Grid>
          </Grid>
          <Box className="text-center mt-6">
            {
              hide ? "":  <Button variant="contained" color="primary" type='submit' className="px-8 bg-[#003b2f] hover:bg-[#003b2f]">
              Send
            </Button>
            }
           
          </Box>

          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TierTwoVerification;
