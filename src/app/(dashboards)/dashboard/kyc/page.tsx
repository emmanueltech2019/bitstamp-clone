import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Alert, AlertTitle } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const TierTwoVerification: React.FC = () => {
  return (
    <Box className="p-6">
      <Typography variant="h4" className="font-bold mb-4">
        TIER TWO VERIFICATION
      </Typography>
      <Alert severity="info" className="mb-4">
        <AlertTitle>Awaiting tier two verification</AlertTitle>
      </Alert>
      <Card className="rounded-lg shadow-md">
        <CardContent>
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
              <Card className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
                <CloudUploadIcon fontSize="large" className="text-gray-400" />
                <Typography variant="body1" className="mt-2 text-gray-600">
                  Tab to upload the front view
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
                <CloudUploadIcon fontSize="large" className="text-gray-400" />
                <Typography variant="body1" className="mt-2 text-gray-600">
                  Tab to upload the back view (Optional)
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Box className="text-center mt-6">
            <Button variant="contained" color="primary" className="px-8">
              Send
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TierTwoVerification;
