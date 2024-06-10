"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Card, CardContent, Grid } from '@mui/material';
import axios2 from "../../../../utils/axios"

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
  const [message, setMessage] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setReason(event.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios2.post('/user/message-submit',{reason, message, title },{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      } ).then(()=>{
        // setOpen(false)
         Toast.fire({
          icon: "success",
          text: "We will get back to you shortly",
          timer: 2000
        }).then(()=>window.location.reload())
    
        // router.refresh();
      })
      
  
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        text:"unsuccessful, try again later",
        timer: 2000
      })
      .then(()=>{})
      // Handle login errors (e.g., invalid credentials)
      // console.error('Login error:', error.response?.data); 
      // setError(error.response?.data.message || 'An error occurred.');
    }
  };
  return (
    <Box className="p-6 py-1">
      <Card className="bg-white rounded-lg p-6 py-1 shadow-md">
        <CardContent>
          <Typography variant="h5" className="font-bold mb-4">
            SUPPORT
          </Typography>
          <Typography variant="h6" className="font-bold mb-2">
            Do you need help?
          </Typography>
          <Typography variant="body1" className="mb-6 text-[15px]">
            We&lsquo;re here to help you with any issues or questions you may have. Whether you need technical support,
            customer service, or just some general advice, we&lsquo;re always happy to assist. Please fill out the form below
            to let us know how we can help, and one of our agents will get in touch with you within 24 hours. We
            understand that you may be feeling frustrated or overwhelmed, and we want to reassure you that we&lsquo;ll do
            everything we can to resolve your issue quickly and efficiently.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={title}
                  required
                  onChange={(e)=>setTitle(e.target.value)}
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
                  required
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
                  required
                  multiline
                  onChange={(e)=>setMessage(e.target.value)}
                  value={message}
                  rows={4}
                  className="mb-4"
                  placeholder="Enter your message"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type='submit' color="primary" className="w-full bg-[#003b2f] text-white">
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
