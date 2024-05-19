import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const UserProfile: React.FC = () => {
  return (
    <Box className="p-6">
      <Grid container spacing={3}>
        {/* User Card */}
        <Grid item xs={12} md={4}>
          <Card className="rounded-lg shadow-md">
            <Box className="bg-green-500 h-12 rounded-t-lg"></Box>
            <CardContent className="flex flex-col items-center">
              <Typography variant="h6" className="mt-4 mb-2 truncate w-full text-center">
                Emmanuel Lucky
              </Typography>
              <Typography variant="body2" className="mb-4 text-gray-600">
                ID: f6IbOnLt
              </Typography>
              <Button variant="contained" color="primary">
                Change Password
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Personal Information */}
        <Grid item xs={12} md={8}>
          <Card className="rounded-lg shadow-md">
            <CardContent>
              <Typography variant="h6" className="font-bold mb-4">
                Personal Information
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-bold">Full Name:</span> Emmanuel Lucky
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-bold">Mobile:</span> Not Set
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-bold">E-mail:</span> emmanueltech2019@gmail.com
              </Typography>
              <Typography variant="body1" className="mb-4">
                <span className="font-bold">Location:</span> Not Set
              </Typography>
              <Button variant="contained" color="primary" className="mr-2">
                Update profile
              </Button>
              <Box className="mt-4">
                <Box className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Profile Completion
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        50%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
