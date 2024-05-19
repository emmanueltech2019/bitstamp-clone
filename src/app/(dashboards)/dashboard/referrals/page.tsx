"use client"
import React from 'react';
import { Box, Card, CardContent, TextField, Typography, Button, Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Referral: React.FC = () => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://dashboard.cryptotrdpro.com/sign-up?referrer=');
    alert('Referral link copied!');
  };

  return (
    <Box className="p-6">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card className="bg-[#04fb9d] p-3 rounded-lg shadow-md text-[#333333]">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4 ">
                We support you every step of the way
              </Typography>
              <Typography variant="body1" className="mb-6 text-[12px]">
                As an affiliate, you&lsquo;ll receive free access to a range of marketing tools and resources designed to help you promote our site and drive sales. We offer top commissions for every successful referral you make, so you can earn money while helping others discover the benefits of Crypto Trade Pro. To get started, simply copy your unique referral link below and share it with your family and friends. If you have any questions or need assistance, please don&lsquo;t hesitate to contact our support team.
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
                value="https://bitstamptradepro.net/login?referrer="
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
                0
              </Typography>
              <Typography variant="h6" className="font-bold mb-2 text-[18px]">
                Active Referral
              </Typography>
              <Typography variant="h4">
                0
              </Typography>
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
            <Typography variant="body1">
              No Referrals
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Referral;
