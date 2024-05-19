import React from 'react';
import {
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
// import { BitcoinIcon, EthereumIcon, TetherIcon, LitecoinIcon } from './YourIconComponents'; // Replace with your actual icon components
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
const WalletManagement: React.FC = () => {
  const walletData = [
    { coin: 'Bitcoin', symbol: 'BTC', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
    { coin: 'Ethereum', symbol: 'ETH', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
    { coin: 'Tether', symbol: 'USDT', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
    { coin: 'Litecoin', symbol: 'LTC', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
  ];

  return (
    <div className="p-4">
      <Alert severity="warning" className="mb-4">
        We won&lsquo;t be held accountable for any losses incurred as a result of the wrong input of wallet address, please make sure your wallet is correct.
      </Alert>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin Type</TableCell>
              <TableCell>Wallet Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {walletData.map((row) => (
              <TableRow key={row.coin}>
                <TableCell className="flex items-center">
                  {row.icon}
                  <span className="ml-2">{`${row.coin} (${row.symbol})`}</span>
                </TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit" size="small">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WalletManagement;
