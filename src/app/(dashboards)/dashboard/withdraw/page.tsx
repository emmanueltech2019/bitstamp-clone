"use client"
import * as React from 'react';
import { Grid, Paper, Typography, Button, Box, Modal, TextField } from '@mui/material';
import BankIcon from '../../../nav/img/bank.jpeg';
import BitcoinIcon from '../../../nav/img/bitcoin.png';
import EthereumIcon from '../../../nav/img/ethereum.png';
import TetherIcon from '../../../nav/img/tether.png';
import LitecoinIcon from '../../../nav/img/digital.png'; 
import FourWaysIcon from '../../../nav/img/4way4.png';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Image from 'next/image';
import axios2 from "../../../../utils/axios"
import Swal from 'sweetalert2';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // For the copy icon
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Link from 'next/link';
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


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function WithdrawalOptions() {
  const options = [
    { label: 'Withdraw via Bank', currency:"TO BANK", Icon: BankIcon },
    { label: 'Withdraw via Bitcoin',currency:"BTC", Icon: BitcoinIcon },
    { label: 'Withdraw via Ethereum',currency:"ETH", Icon: EthereumIcon },
    { label: 'Withdraw via USDT (TRC20)',currency:"USDT", Icon: TetherIcon },
    { label: 'Withdraw via Litecoin',currency:"LTC", Icon: LitecoinIcon },
    { label: 'Withdraw via 4-Way Mirror Money',currency:"4WMM", Icon: FourWaysIcon },
  ];
  

  const handleClick = async (method:string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios2.get('/user/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });         
      if(response.data.verified != "approved"){
        Toast.fire({
          icon: "error",
          title:"Please verify your account"
        }).then(() => {
          window.location.href = "/dashboard/kyc/"
        })
      }else{
        if(response.data?.withdrawStatus==false){
          Toast.fire({
            icon: "warning",
            title:"Ongoing trading session"
          })
        }else{
          handleMethod(method)
        }
      }
      console.log(response.data.verified);
    } catch (error: any) {
    } finally {
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios2.post('/user/withdraw',{password, amount, address, method, network},{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      } ).then(()=>{
        setOpen(false)
         Toast.fire({
          icon: "success",
          text: "Your withdrawal is been processed",
          timer: 2000
        });
    
      })
      

    } catch (error: any) {
      Toast.fire({
        icon: "error",
        text:error.response?.data.message,
        timer: 2000
      })
      .then(()=>{})
      // Handle login errors (e.g., invalid credentials)
      // console.error('Login error:', error.response?.data); 
      // setError(error.response?.data.message || 'An error occurred.');
    }
  };
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState<number | string>(100);
  const [method, setMethod] = React.useState<string | null>(null);
  const [address, setAddress] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  const [network, setNetwork] = React.useState<string | null>(null)

  const handleMethod = async (method: string) => {
    setMethod(method);
    console.log(method)
    setOpen(true);
    const response = await axios2.get('/user/profile',{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    } )
    if (response.data) {
      console.log(response.data.wallets[0].wallet)
    }
    switch (method) {
      case "BTC":
        setNetwork("BITCOIN")
        setAddress(response.data.wallets[0].wallet)
        if(response.data.wallets[0].wallet=="" || response.data.wallets[0].wallet=="xxxxxxxxxxxxxxxx"){
          setOpen(false);
          Toast.fire({
            icon: "error",
            title:"Please add your BTC wallet"
          }).then(()=>{
            window.location.href = "/dashboard/wallets"
          })
        }
        break;
      case "ETH":
        setNetwork("ERC 20")
        setAddress(response.data.wallets[1].wallet)
        if(response.data.wallets[1].wallet=="" || response.data.wallets[1].wallet=="xxxxxxxxxxxxxxxx"){
          setOpen(false);
          Toast.fire({
            icon: "error",
            title:"Please add your ETH wallet"
          }).then(()=>{
            window.location.href = "/dashboard/wallets"
          })
        }
        break;
      case "USDT":
        setNetwork("TRC20")
        setAddress(response.data.wallets[2].wallet)
        if(response.data.wallets[2].wallet=="" || response.data.wallets[2].wallet=="xxxxxxxxxxxxxxxx"){
          setOpen(false);
          Toast.fire({
            icon: "error",
            title:"Please add your USDT wallet"
          }).then(()=>{
            window.location.href = "/dashboard/wallets"
          })
        }
        break;
      case "LTC":
        setNetwork("LTC")
        setAddress(response.data.wallets[3].wallet)
        if(response.data.wallets[3].wallet=="" || response.data.wallets[3].wallet=="xxxxxxxxxxxxxxxx"){
          setOpen(false);
          Toast.fire({
            icon: "error",
            title:"Please add your LTC wallet"
          }).then(()=>{
            window.location.href = "/dashboard/wallets"
          })
        }
        break;
        case "4WMM":
        setNetwork("4WMM")
        setAddress(response.data.wallets[4].wallet)
        if(response.data.wallets[4].wallet=="" || response.data.wallets[4].wallet=="xxxxxxxxxxxxxxxx"){
          setOpen(false);
          Toast.fire({
            icon: "error",
            title:"Please add your 4WMM wallet"
          }).then(()=>{
            window.location.href = "/dashboard/wallets"
          })
        }
        break;
       
      case "TO BANK":
        setNetwork("")
        break;
      default:
        break;
    }
  }
  return (
    <>

<div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          {
            method=="TO BANK" ?<>
             <Box sx={style} className="rounded-lg shadow-md">
          <h2 id="modal-modal-title" className="text-xl font-semibold mb-4">WITHDRAW {method}</h2>
           <div>
            <label>
              Amount
            </label>
           </div>
          <TextField
            fullWidth
            required
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            InputProps={{
              startAdornment: (
                <Button size="small">
                  <AttachMoneyOutlinedIcon />
                </Button>
              ),
            }}
          />
           <div>
            <label>
            Account number
            </label>
           </div>
          <TextField
            fullWidth
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
          <div>
            <label>
            House Address
            </label>
           </div>
          <TextField
            fullWidth
            value={network} 
            placeholder='EG: 701 18th St NW, Washington, DC 20006, United States'
            onChange={(e)=>setNetwork(e.target.value)}
          />
            <div>
            <label>
            Password
            </label>
           </div>
          <TextField
            fullWidth
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
           
          <div className="flex justify-between py-5">
            <Button onClick={handleClose}>Close</Button>
            <Button variant="contained" color="success" type='submit'>Withdraw</Button>
          </div>
        </Box>
            </> : <Box sx={style} className="rounded-lg shadow-md">
            <h2 id="modal-modal-title" className="text-xl font-semibold mb-4">WITHDRAW {method}</h2>
             <div>
              <label>
                Amount
              </label>
             </div>
            <TextField
              fullWidth
              required
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Button size="small">
                    <AttachMoneyOutlinedIcon />
                  </Button>
                ),
              }}
            />
             <div>
              <label>
              {method} Address
              </label>
             </div>
            <TextField
              fullWidth
              disabled
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
            />
            <div>
              <label>
              {method} Network
              </label>
             </div>
            <TextField
              fullWidth
              value={network} 
              placeholder=''
              disabled
              onChange={(e)=>setNetwork(e.target.value)}
            />
              <div>
              <label>
              Password
              </label>
             </div>
            <TextField
              fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
             
            <div className="flex justify-between py-5">
              <Button onClick={handleClose}>Close</Button>
              <Button variant="contained" color="success" type='submit'>Withdraw</Button>
            </div>
          </Box>
          }
       

        </form>
      </Modal>
    </div>





      <Box className="p-4"> {/* Add padding for spacing */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Link href={'/dashboard/wallets'}>
            <Button variant="outlined" startIcon={<AddCircleOutlineOutlinedIcon />} className="text-[#003b2f] border-[#003b2f]">
              Add your wallet
            </Button>
            </Link>
          </Grid>
          {options.map((option) => (
            <Grid item xs={12} sm={6} md={4} key={option.label}>
              <Paper elevation={3} className="p-4 rounded-lg flex flex-col items-center justify-center h-full">
                <Image src={option.Icon} className="text-4xl mb-2 h-[150px] w-[150px]" alt=""/> {/* Make icon larger */}
                <Typography variant="body1" align="center" className="mb-2 text-[12px] px-2">
                  {option.label}
                </Typography>
                <Button variant="contained" onClick={()=>handleClick(option.currency)} fullWidth className='bg-[#003b2f] hover:bg-[#003b2f] text-[10px] px-2'>
                  + {option.label}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default WithdrawalOptions;
