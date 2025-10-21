"use client"
import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, TextField, Typography, Button, Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from '../../../../utils/axios';
import { useSearchParams } from 'next/navigation'; 

const Referral: React.FC = () => {
  interface ProfileData {
    name: string;
    email: string;
    // Add more profile fields as needed
  }
  interface DownlineData {
    name: string;
    email: string;
    // Add more profile fields as needed
  }
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [downlineData, setDownlineData] = useState<any>([]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://mirrortradex.com/login?referrer=${profileData?.email}`);
    alert('Referral link copied!');
  };



  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        setProfileData(response.data);
        console.log(response.data);
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
  }, []); // Empty dependency array ensures this runs only once on mount


  return (
    <Box className="p-6">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card className="bg-[#003b2f] p-3 rounded-lg shadow-md text-[#f3f3f3]">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4 ">
                We support you every step of the way
              </Typography>
              <Typography variant="body1" className="mb-6 text-[12px]">
                As an affiliate, you&lsquo;ll receive free access to a range of marketing tools and resources designed to help you promote our site and drive sales. We offer top commissions for every successful referral you make, so you can earn money while helping others discover the benefits of MirrorTradeX. To get started, simply copy your unique referral link below and share it with your family and friends. If you have any questions or need assistance, please don&lsquo;t hesitate to contact our support team.
              </Typography>
              <TextField
                fullWidth
                className='text-white'
                sx={{
                    '& .MuiInputBase-root': { color: '333333' }, // Style the text
                    '& fieldset': { borderColor: '333333' },       // Style the border
                    '& label.Mui-focused': { color: '333333' },   // Style the focused label
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '333333' },     // Style the non-focused border
                      '&:hover fieldset': { borderColor: '333333' } // Style the border on hover
                    },
                  }}
                value={`https://mirrortradex.com/login?referrer=${profileData?.email}`}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleCopyLink} className="text-[#333333]">
                      <ContentCopyIcon />
                    </IconButton>
                  ),
                }}
              />
              {/* <Box className="mt-4">
                <Button
                  variant="contained"
                  startIcon={<ShareIcon />}
                  className="mr-2 bg-[#003b2f] hover:bg-[#003b2f]"
                >
                  Share
                </Button>
                <Button
                  variant="contained"
                  className="mr-2"
                >
                  Tweet
                </Button>
                <Button
                  variant="contained"
                  className="mr-2"
                >
                  WhatsApp
                </Button>
              </Box> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="bg-white p-6 rounded-lg shadow-md">
            <CardContent>
              <Typography variant="h6" className="font-bold mb-2 text-[18px]">
                Total Referral
              </Typography>
              <Typography variant="h4" className="mb-4">
                {downlineData.length}
              </Typography>
              {/* <Typography variant="h6" className="font-bold mb-2 text-[18px]">
                Active Referral
              </Typography>
              <Typography variant="h4">
                0
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box className="mt-6">
        <Typography variant="h6" className="font-bold mb-2">
          Referral History
        </Typography>
        <Card className="bg-white p-6 rounded-lg shadow-md">
          <CardContent>
          <div className="overflow-x-auto">
            {downlineData.length > 0 ? (
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {downlineData.map((downline: any, index: number) => (
                    <tr key={index} className="mb-4">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{downline.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{downline.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{downline.verified}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No Referrals</p>
            )}
          </div>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Referral;
