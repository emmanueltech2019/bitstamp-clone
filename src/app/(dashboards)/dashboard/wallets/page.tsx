// "use client"
// import React, { useEffect, useState } from 'react';
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
//   TextField,
//   Button,
// } from '@mui/material';
// import { Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
// import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
// import axios from "../../../../utils/axios";

// const WalletManagement: React.FC = () => {
//   const [walletData, setWalletData] = useState([
//     { coin: 'Bitcoin', symbol: 'BTC', icon: <CurrencyBitcoinOutlinedIcon />, address: '', isEditing: false },
//     { coin: 'Ethereum', symbol: 'ETH', icon: <CurrencyBitcoinOutlinedIcon />, address: '', isEditing: false },
//     { coin: 'Tether', symbol: 'USDT', icon: <CurrencyBitcoinOutlinedIcon />, address: '', isEditing: false },
//     { coin: 'Litecoin', symbol: 'LTC', icon: <CurrencyBitcoinOutlinedIcon />, address: '', isEditing: false },
//   ]);
//   interface ProfileData {
//     name: string;
//     email: string;
//     wallets: Array<any>
//     // Add more profile fields as needed
//   }
//   const [profileData, setProfileData] = useState<ProfileData | null>(null);
//   const handleEditClick = async(index: number) => {
//     const newData = [...walletData];
//     newData[index].isEditing = true;
//     // newData[index].address='loading...'
//     setWalletData(newData);

//     try {
//       const response = await axios.get('/user/profile', {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//       }); 
//       if(response.data){
//         console.log(response.data.wallets);
//         const walletIndex = response.data.wallets.findIndex((wallet:any) => wallet.coin === newData[index].coin);
//         if(walletIndex !== -1) {
//           newData[index].address = response.data.wallets[walletIndex].wallet;
//           setWalletData(newData);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//     }
//   };

//   const handleSaveClick = async (index: number) => {
//     const newData = [...walletData];
//     newData[index].isEditing = false;
//     setWalletData(newData);

//     let data = {wallet: newData[index].address, coin: newData[index].coin, index};
//     console.log('Saving data:', data);
    
//     try {
//       const response = await axios.post('/user/update-wallet', data, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//       });
//       if(response.status === 200){
//         alert("Wallet updated");
//       }
//     } catch (error) {
//       console.error('Error updating wallet:', error);
//     }
//   };

//   const handleCancelClick = (index: number) => {
//     const newData = [...walletData];
//     newData[index].isEditing = false;
//     setWalletData(newData);
//   };

//   const handleInputChange = (index: number, value: string) => {
//     const newData = [...walletData];
//     newData[index].address = value;
//     setWalletData(newData);
//   };

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log('Token:', token);
//         const response = await axios.get('/user/profile', {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//         });         
//         setProfileData(response.data);
//       } catch (error: any) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     fetchProfileData();
//   }, []); // Empty dependency array ensures this runs only once on mount

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
//             {walletData.map((row, index) => (
//               <TableRow key={row.coin}>
//                 <TableCell className="flex items-center">
//                   {row.icon}
//                   <span className="ml-2">{`${row.coin} (${row.symbol})`}</span>
//                 </TableCell>
//                 <TableCell>
//                   {row.isEditing ? (
//                     <TextField
//                       value={row.address}
//                       onChange={(e) => handleInputChange(index, e.target.value)}
//                       variant="outlined"
                      
//                       size="small"
//                     />
//                   ) : (
//                     <button onClick={()=>{handleEditClick(index)}}>
//                       {row.address}
//                     </button>
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   {row.isEditing ? (
//                     <>
//                       <IconButton aria-label="save" size="small" onClick={() => handleSaveClick(index)}>
//                         <SaveIcon />
//                       </IconButton>
//                       <IconButton aria-label="cancel" size="small" onClick={() => handleCancelClick(index)}>
//                         <CancelIcon />
//                       </IconButton>
//                     </>
//                   ) : (
//                     <IconButton aria-label="edit" size="small" onClick={() => handleEditClick(index)}>
//                       <EditIcon />
//                     </IconButton>
//                   )}
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
"use client";
import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import axios from "../../../../utils/axios";

interface WalletData {
  coin: string;
  symbol: string;
  icon: JSX.Element;
  address: string;
  isEditing: boolean;
}

const WalletManagement: React.FC = () => {
  const [walletData, setWalletData] = useState<WalletData[]>([
    { coin: "Bitcoin", symbol: "BTC", icon: <CurrencyBitcoinOutlinedIcon />, address: "", isEditing: false },
    { coin: "Ethereum", symbol: "ETH", icon: <CurrencyBitcoinOutlinedIcon />, address: "", isEditing: false },
    { coin: "Tether", symbol: "USDT", icon: <CurrencyBitcoinOutlinedIcon />, address: "", isEditing: false },
    { coin: "Litecoin", symbol: "LTC", icon: <CurrencyBitcoinOutlinedIcon />, address: "", isEditing: false },
    { coin: "Metis", symbol: "METIS", icon: <CurrencyBitcoinOutlinedIcon />, address: "", isEditing: false },
    // { coin: "Ripple", symbol: "XRP", icon: <CurrencyBitcoinOutlinedIcon />, address: "", isEditing: false },
  ]);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await axios.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const userWallets = response.data.wallets;

        // Merge API wallets into walletData
        const updatedWalletData = walletData.map((wallet) => {
          const apiWallet = userWallets.find((w: any) => w.coin === wallet.coin);
          return apiWallet
            ? { ...wallet, address: apiWallet.wallet } // Update with API address
            : wallet; // Leave as-is if not found
        });

        setWalletData(updatedWalletData);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      }
    };

    fetchWallets();
  }, []);

  const handleInputChange = (index: number, value: string) => {
    const updatedWallets = [...walletData];
    updatedWallets[index].address = value;
    setWalletData(updatedWallets);
  };

  const handleEditClick = (index: number) => {
    const updatedWallets = [...walletData];
    updatedWallets[index].isEditing = true;
    setWalletData(updatedWallets);
  };

  const handleSaveClick = async (index: number) => {
    const wallet = walletData[index];

    try {
      await axios.post(
        "/user/update-wallet",
        { wallet: wallet.address, coin: wallet.coin, index },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedWallets = [...walletData];
      updatedWallets[index].isEditing = false;
      setWalletData(updatedWallets);

      alert("Wallet updated successfully!");
    } catch (error) {
      console.error("Error updating wallet:", error);
    }
  };

  const handleCancelClick = (index: number) => {
    const updatedWallets = [...walletData];
    updatedWallets[index].isEditing = false;
    setWalletData(updatedWallets);
  };

  return (
    <div className="p-4">
      <Alert severity="warning" className="mb-4">
        We won&rsquo;t be held accountable for any losses incurred as a result of the wrong input of wallet address. Please ensure your wallet address is correct.
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
                <TableCell>
                  {row.icon}
                  <span style={{ marginLeft: "8px" }}>{`${row.coin} (${row.symbol})`}</span>
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
                    row.address || "No address linked"
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <>
                      <IconButton size="small" onClick={() => handleSaveClick(index)}>
                        <SaveIcon />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleCancelClick(index)}>
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <IconButton size="small" onClick={() => handleEditClick(index)}>
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
