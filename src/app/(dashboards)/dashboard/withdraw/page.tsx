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
function WithdrawalOptions() {
  const options = [
    { label: 'Withdraw via Bank', Icon: BankIcon },
    { label: 'Withdraw via Bitcoin', Icon: BitcoinIcon },
    { label: 'Withdraw via Ethereum', Icon: EthereumIcon },
    { label: 'Withdraw via USDT (TRC20)', Icon: TetherIcon },
    { label: 'Withdraw via Litecoin', Icon: LitecoinIcon },
  ];

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
              <Image src={option.Icon} className="text-4xl mb-2 h-30" /> {/* Make icon larger */}
              <Typography variant="body1" align="center" className="mb-2 text-[12px] px-2">
                {option.label}
              </Typography>
              <Button variant="contained" fullWidth className='bg-[#003b2f] hover:bg-[#003b2f] text-[10px] px-2'>
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
