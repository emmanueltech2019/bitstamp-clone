"use client"
import * as React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import BankIcon from '../../../nav/img/bank.jpeg';
import BitcoinIcon from '../../../nav/img/bitcoin.png';
import EthereumIcon from '../../../nav/img/ethereum.png';
import TetherIcon from '../../../nav/img/tether.png';
import LitecoinIcon from '../../../nav/img/digital.png'; // Custom icon component (MUI's SvgIcon can be used)
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Image from 'next/image';
import axios2 from "../../../../utils/axios"
import Swal from 'sweetalert2';

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
function WithdrawalOptions() {
  const options = [
    { label: 'Withdraw via Bank', Icon: BankIcon },
    { label: 'Withdraw via Bitcoin', Icon: BitcoinIcon },
    { label: 'Withdraw via Ethereum', Icon: EthereumIcon },
    { label: 'Withdraw via USDT (TRC20)', Icon: TetherIcon },
    { label: 'Withdraw via Litecoin', Icon: LitecoinIcon },
  ];

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios2.get('/user/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });         
      if(response.data.verified != "verified"){
        Toast.fire({
          icon: "error",
          title:"Please verify your account"
        }).then(() => {
          window.location.href = "/dashboard/kyc/"
        })
      }
      console.log(response.data.verified);
    } catch (error: any) {
    } finally {
    }
  }
  return (
    <Box className="p-4"> {/* Add padding for spacing */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" startIcon={<AddCircleOutlineOutlinedIcon />} className="text-[#003b2f] border-[#003b2f]">
            Add your wallet
          </Button>
        </Grid>
        {options.map((option) => (
          <Grid item xs={12} sm={6} md={2.4} key={option.label}>
            <Paper elevation={3} className="p-4 rounded-lg flex flex-col items-center justify-center h-full">
              <Image src={option.Icon} className="text-4xl mb-2 h-30" alt=""/> {/* Make icon larger */}
              <Typography variant="body1" align="center" className="mb-2 text-[12px] px-2">
                {option.label}
              </Typography>
              <Button variant="contained" onClick={handleClick} fullWidth className='bg-[#003b2f] hover:bg-[#003b2f] text-[10px] px-2'>
                + {option.label}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      
    </Box>
  );
}

export default WithdrawalOptions;
