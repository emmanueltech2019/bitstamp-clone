"use client"
import React, { useState, ChangeEvent } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Card, CardContent, Grid } from '@mui/material';

interface Reason {
  value: string;
  label: string;
}

const reasons: Reason[] = [
  { value: 'technical', label: 'Technical Support' },
  { value: 'customer', label: 'Customer Service' },
  { value: 'general', label: 'General Inquiry' },
];

const SupportForm: React.FC = () => {
  const [reason, setReason] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setReason(event.target.value);
  };

  return (
    <Box className="p-6">
      <Card className="bg-white rounded-lg p-6 shadow-md">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-4">
            SUPPORT
          </Typography>
          <Typography variant="h6" className="font-bold mb-2">
            Do you need help?
          </Typography>
          <Typography variant="body1" className="mb-6">
            We're here to help you with any issues or questions you may have. Whether you need technical support,
            customer service, or just some general advice, we're always happy to assist. Please fill out the form below
            to let us know how we can help, and one of our agents will get in touch with you within 24 hours. We
            understand that you may be feeling frustrated or overwhelmed, and we want to reassure you that we'll do
            everything we can to resolve your issue quickly and efficiently.
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                  placeholder="Enter subject"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  label="Reason"
                  value={reason}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  className="mb-4"
                  placeholder="What is your reason?"
                >
                  {reasons.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  className="mb-4"
                  placeholder="Enter your message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" className="w-full bg-[#003b2f] text-white">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SupportForm;
