// import React from 'react';
// import {
//   Alert,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from '@mui/material';
// import { Edit as EditIcon } from '@mui/icons-material';
// // import { BitcoinIcon, EthereumIcon, TetherIcon, LitecoinIcon } from './YourIconComponents'; // Replace with your actual icon components
// import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
// const WalletManagement: React.FC = () => {
//   const walletData = [
//     { coin: 'Bitcoin', symbol: 'BTC', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
//     { coin: 'Ethereum', symbol: 'ETH', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
//     { coin: 'Tether', symbol: 'USDT', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
//     { coin: 'Litecoin', symbol: 'LTC', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx' },
//   ];

//   return (
//     <div className="p-4">
//       <Alert severity="warning" className="mb-4">
//         We won&lsquo;t be held accountable for any losses incurred as a result of the wrong input of wallet address, please make sure your wallet is correct.
//       </Alert>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Coin Type</TableCell>
//               <TableCell>Wallet Address</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {walletData.map((row) => (
//               <TableRow key={row.coin}>
//                 <TableCell className="flex items-center">
//                   {row.icon}
//                   <span className="ml-2">{`${row.coin} (${row.symbol})`}</span>
//                 </TableCell>
//                 <TableCell>{row.address}</TableCell>
//                 <TableCell>
//                   <IconButton aria-label="edit" size="small">
//                     <EditIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default WalletManagement;

"use client"
import React, { useEffect, useState } from 'react';
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
  TextField,
} from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
// import { BitcoinIcon, EthereumIcon, TetherIcon, LitecoinIcon } from './YourIconComponents'; // Replace with your actual icon components
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import axios from "../../../../utils/axios";
const WalletManagement: React.FC = () => {
  const [walletData, setWalletData] = useState([
    { coin: 'Bitcoin', symbol: 'BTC', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx', isEditing: false },
    { coin: 'Ethereum', symbol: 'ETH', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx', isEditing: false },
    { coin: 'Tether', symbol: 'USDT', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx', isEditing: false },
    { coin: 'Litecoin', symbol: 'LTC', icon: <CurrencyBitcoinOutlinedIcon />, address: 'xxxxxxxxxxxxxxxx', isEditing: false },
  ]);

  const handleEditClick = async(index: number) => {
    const newData = [...walletData];
    newData[index].isEditing = true;
    setWalletData(newData);
    const response = await axios.get('/user/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }); 
    if(response.data){
      console.log(response.data.wallets)
      newData[index].address = response.data.wallets[index].wallet;
      setWalletData(newData);
    }
  };

  const handleSaveClick = async (index: number) => {
    const newData = [...walletData];
    newData[index].isEditing = false;
    setWalletData(newData);
      let data ={wallet:newData[index].address, coin:newData[index].coin, index}
      console.log(data)
      try {
        const response = await axios.post('/user/update-wallet',data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }); 
      } catch (error) {
        
      }

  };

  const handleCancelClick = (index: number) => {
    const newData = [...walletData];
    newData[index].isEditing = false;
    setWalletData(newData);
  };

  const handleInputChange = (index: number, value: string) => {
    const newData = [...walletData];
    newData[index].address = value;
    setWalletData(newData);
  };


  const handleAddWallet = () =>{
    
  }
  interface ProfileData {
    name: string;
    email: string;
    wallets: Array<any>
    // Add more profile fields as needed
  }
const [profileData, setProfileData] = useState<ProfileData | null>(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        const response = await axios.get('/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });         
        setProfileData(response.data);
      } catch (error: any) {
      } finally {
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once on mount

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
            {walletData.map((row, index) => (
              <TableRow key={row.coin}>
                <TableCell className="flex items-center">
                  {row.icon}
                  <span className="ml-2">{`${row.coin} (${row.symbol})`}</span>
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.address}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      variant="outlined"
                      size="small"
                    />
                  ) : (
                    row.address
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <>
                      <IconButton aria-label="save" size="small" onClick={() => handleSaveClick(index)}>
                        <SaveIcon />
                      </IconButton>
                      <IconButton aria-label="cancel" size="small" onClick={() => handleCancelClick(index)}>
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton aria-label="edit" size="small" onClick={() => handleEditClick(index)}>
                      <EditIcon />
                    </IconButton>
                  )}
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
