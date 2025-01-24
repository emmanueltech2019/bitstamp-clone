"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Card, CardContent, Grid, Accordion, AccordionSummary, AccordionDetails, IconButton, OutlinedInput, InputAdornment } from '@mui/material';
import axios2 from "../../../../utils/axios"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send"; // Import Send icon
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
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

interface Message {
  _id: any;
  title: string;
  reason: string;
  message: string;
  replies: Reply[]; // Array to store replies
}

interface Reply {
  _id: number;
  message: string;
  from: string
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setReason(event.target.value);
  };

  const [replyText, setReplyText] = useState("");


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
      console.error('Login error:', error.response?.data); 
      // setError(error.response?.data.message || 'An error occurred.');
    }
  };

  const fetchMessages = async () => {
    
    try {
      const response = await axios2.get("/user/messages", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessages(response.data.messages);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  const ScriptLiveCHat = () =>{
     // Create a script element
     const script = document.createElement('script');
     script.src = 'https://embed.tawk.to/6793b086825083258e0abe39/1iicej3ns';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
     
     // Append the script to the body
     document.body.appendChild(script);
 
     // Cleanup the script when the component unmounts
     return () => {
       document.body.removeChild(script);
     };
  }
  
    // Fetch messages on initial load and after adding a reply
    useEffect(() => {
      fetchMessages();
      ScriptLiveCHat()
    }, []); 
  
    const handleReply = async (messageId: number) => {
      try {
        await axios2.post(
          `/user/messages/${messageId}/reply`,
          { message: replyText },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
  
        setReplyText("");
        // Re-fetch messages after adding a reply
        await fetchMessages(); 
      } catch (error) {
        console.error("Error sending reply:", error);
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



      {/* Message List with Reply Threads */}
      <Box mt={4} pb={5}>
        <h1 className='text-[20px] font-bold'>Tickets</h1>

        {isLoading ? (
      <Typography>Loading messages...</Typography> // Display loading message
    ) : (
      <>
       {messages.map((message) => (
          <Accordion
          key={message._id}
          expanded={activeThreadId === message._id}
          onChange={() =>
            setActiveThreadId(
              activeThreadId === message._id ? null : message._id
            )
          }
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <IconButton
              onClick={(event) => {
                event.stopPropagation(); // Prevent accordion expansion
                setActiveThreadId(null); // Close the thread
              }}
              sx={{ marginRight: 1 }}
            >
              <MessageOutlinedIcon /> 
            </IconButton>

            <Typography>
              {message.title} ({message.reason})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          {message.replies && message.replies.length > 0 ? (
              <div>
                {message.replies.map((reply) => (
                  <Typography key={reply._id} className='border  border-1 my-2 p-2 px-2 rounded-full'><b>{reply.from}</b>- {reply.message}</Typography>
                ))}
              </div>
            ) : (
              <Typography>No replies yet</Typography> // Or similar message
            )}

            <OutlinedInput
              fullWidth
              placeholder="Enter your reply"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => handleReply(message._id)}
                    disabled={!replyText.trim()}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </AccordionDetails>
        </Accordion>
        ))}</>
    )}
       
      </Box>
    </Box>
  );
};

export default SupportForm;
