// "use client"
// import React, { useEffect, useState } from 'react';
// import { Button, Typography, Box, Grid, Card, CardContent } from '@mui/material';
// import Img from "../../../nav/img/invest.png";
// import Image from 'next/image';
// import Link from 'next/link';
// import axios from "../../../../utils/axios"
// import Swal from 'sweetalert2';
// // import { Investments } from '@/types'; // Assuming this is your type
// import { ArrowForward, TrendingUp, AccessTime, CalendarToday } from '@mui/icons-material';

// // --- Card Component Refactoring ---
// function NoActiveInvestment() {

//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top-end",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.onmouseenter = Swal.stopTimer;
//       toast.onmouseleave = Swal.resumeTimer;
//     }
//   });
//   interface Investments {
//     amount: number;
//     asset: string;
//     status: string;
//     date: string;
//     duration: string;
//     plan: string;
//     _id: any;
//   }
// const [investments, setInvestments] = useState<Investments[]>([]);
//   useEffect(() => {
//     const placedInvestments = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get('/user/user-investments', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         console.log(response);
//         setInvestments(response.data)

//       } catch (error: any) {
//         // Handle errors
//         console.log(error)
//         Toast.fire({
//           icon: 'error',
//           title: error.response?.data.message || 'An error occurred.'
//         });
//         console.error('Investment error:', error.response?.data);
//       }
//     };

//     placedInvestments();
//   }, []);
  
//   return (
//     <>
//       {investments.length >0 ? 
//       <>
//       {/* <Box className="flex flex-col items-center justify-center h-full bg-gray-100 overflow-y-auto">
//       {investments.map((investment: Investments, index:number) =>(
//         <Card key={index} className="bg-white rounded-lg p-4 my-2 w-[400px] py-0 shadow-md border-l border-spacing-2 border-[#003b2f]">
//           <CardContent>
//             <Typography variant="h6" className='font-semibold my-1'>ASSET: {investment.asset}</Typography>
//             <Typography variant="h6" className="font-semibold my-1">AMOUNT: ${investment.amount}.00</Typography>
//             <Typography variant="h6" className='font-semibold my-1'>PLAN: {investment.plan}</Typography>
//             <Typography variant="h6" className="font-semibold my-1">DURATION: {investment.duration}</Typography>
//             <Typography variant="h6" className='font-semibold my-1'>START DATE : {investment.date.split("T")[0]}</Typography>
//             <Typography variant="h5" className="font-semibold my-1 text-[#3bb758] uppercase">{investment.status}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//       <Link href={'/dashboard/investment/plan'}>
//         <Button variant="contained" color="primary" className="px-8 my-10 py-2 rounded-md text-white font-medium bg-[#003b2f] hover:bg-[#003b2f]">
//          Add Investment
//         </Button>
//       </Link>
//       </Box> */}


// <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-200 overflow-y-auto p-4">
//   {investments.map((investment: Investments, index: number) => (
//     // Use a Link wrapper for the whole card to make it clickable
//     <Link 
//       key={index} 
//       href={`/dashboard/trading?id=${investment._id}`} // Dynamic route to a trading page
//       passHref
//       className="w-full max-w-lg my-3 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
//     >
//       <Card className="bg-gray-800 text-white rounded-xl border-2 border-green-500/20 shadow-lg cursor-pointer">
//         <CardContent className="p-5 flex flex-col space-y-3">
          
//           {/* Asset Header & Status */}
//           <div className="flex justify-between items-center pb-2 border-b border-gray-700">
//             <Typography variant="h4" className='font-extrabold text-green-400'>
//               {investment.asset} <span className='text-lg font-normal text-gray-400'>/ USD</span>
//             </Typography>
//             <div className={`
//               px-3 py-1 text-sm font-bold rounded-full 
//               ${investment.status.toLowerCase() === 'running' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}
//               uppercase tracking-wider
//             `}>
//               {investment.status}
//             </div>
//           </div>
          
//           {/* Amount & Plan */}
//           <div className="flex justify-between items-center pt-2">
//             <div>
//               <Typography variant="body2" className="text-gray-400 uppercase tracking-widest">
//                 Invested Amount
//               </Typography>
//               <Typography variant="h5" className="font-bold text-white mt-1">
//                 ${investment.amount}.00
//               </Typography>
//             </div>
//             <div className="text-right">
//               <Typography variant="body2" className='text-gray-400 uppercase tracking-widest'>
//                 Investment Plan
//               </Typography>
//               <Typography variant="h5" className="font-bold text-cyan-400 mt-1">
//                 {investment.plan}
//               </Typography>
//             </div>
//           </div>
          
//           {/* Details Grid */}
//           <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-700">
            
//             {/* Duration */}
//             {/* <div className="flex items-center space-x-2">
//               <AccessTime className="text-green-500 w-5 h-5" />
//               <div>
//                 <Typography variant="body2" className='text-gray-500 text-xs uppercase'>Duration</Typography>
//                 <Typography variant="body1" className="font-medium text-gray-300">
//                   {investment.duration}
//                 </Typography>
//               </div>
//             </div> */}
            
//             {/* Start Date */}
//             {/* <div className="flex items-center space-x-2">
//               <CalendarToday className="text-green-500 w-5 h-5" />
//               <div>
//                 <Typography variant="body2" className='text-gray-500 text-xs uppercase'>Start Date</Typography>
//                 <Typography variant="body1" className="font-medium text-gray-300">
//                   {investment.date.split("T")[0]}
//                 </Typography>
//               </div>
//             </div> */}
            
//             {/* Action Indicator (Simulated ROI) */}
//             <div className="col-span-2 flex justify-between items-center border-t border-gray-700 pt-3 mt-3">
//               <div className="flex items-center space-x-2">
//                 <TrendingUp className="text-green-500 w-6 h-6" />
//                 <Typography variant="body1" className="text-lg font-semibold text-green-400">
//                   View Mirror Trade
//                 </Typography>
//               </div>
//               <ArrowForward className="text-green-400 w-6 h-6 group-hover:translate-x-1 transition-transform" />
//             </div>
            
//           </div>
          
//         </CardContent>
//       </Card>
//     </Link>
//   ))}
  
//   {/* Add Investment Button - Styled for the dark theme */}
//   <Link href={'/dashboard/investment/plan'}>
//     <Button 
//       variant="contained" 
//       className="px-8 my-10 py-3 rounded-xl text-white font-bold bg-green-600 hover:bg-green-700 shadow-lg transition-colors"
//     >
//       <span className="text-lg">ADD NEW INVESTMENT</span>
//     </Button>
//   </Link>
// </Box>
//       </> : <>
//       <Box className="flex flex-col items-center justify-center h-[84vh] bg-gray-100">
//       <Image src={Img} alt="Person sitting on a stack of coins with a laptop"
//         className="w-96 mb-8"
//       />

//       <Typography variant="h5" component="h2" className="font-semibold mb-2 text-gray-800">
//         No Active Investment
//       </Typography>
//       <Typography variant="body1" className="text-center text-gray-600 mb-6">
//         You currently do not have an active investment. Kindly click the button below to get started.
//       </Typography>

//       <Link href={'/dashboard/investment/plan'}>
//         <Button variant="contained" color="primary" className="px-8 py-2 rounded-md text-white font-medium bg-[#003b2f] hover:bg-[#003b2f]">
//           Start Investing
//         </Button>
//       </Link></Box></>}
//       </>
    
//   );
// }

// export default NoActiveInvestment;
"use client"
import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { ArrowBack, History, AccountBalanceWallet } from '@mui/icons-material';
import axios from "../../../../utils/axios"
import Link from 'next/link';

// Function to get query parameter manually (replaces useSearchParams)
const getQueryParam = (param: string): string | null => {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};



// Investment Interface (ensure this matches your actual type)
interface Investments {
  amount: number;
  asset: string;
  status: string;
  date: string;
  duration: string;
  plan: string;
  _id: any;
}
interface BalanceHistory {
  oldBalance: number;
  newBalance: number;
  difference: number;
  percentageChange: number;
  date: string;
}
// Map the asset names to their TradingView/Widget symbols
const assetSymbolMap: { [key: string]: string } = {
    'BTC': 'BINANCE:BTCUSDT',
    'ETH': 'BINANCE:ETHUSDT',
    'USDT': 'BINANCE:BNBUSDT', 
    'XRP': 'BINANCE:XRPUSDT',
};

async function fetchInvestment(id: string, token: string): Promise<{ investment: Investments; balanceHistory: BalanceHistory[] } | undefined> {
  if (id) {
    try {
      const response = await axios({
        method: "get",
        url: `/user/investment/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      });

      const { investment, balanceHistory } = response.data;
      return { investment, balanceHistory };
    } catch (error) {
      console.error("Error fetching investment:", error);
      return undefined;
    }
  }
  return undefined;
}
const CryptoTradingPage = () => {
  // const investmentId = getQueryParam('id')const [investmentId, setInvestmentId] = useState<string | null>(null);

const [investmentId, setInvestmentId] = useState<string | null>(null);
const [balanceHistory, setBalanceHistory] = useState<BalanceHistory[]>([]);



  
  const [investment, setInvestment] = useState<Investments | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Custom message state to replace Swal
  const [toastMessage, setToastMessage] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  
  const showToast = (message: string, type: 'success' | 'error') => {
      setToastMessage({ message, type });
      setTimeout(() => setToastMessage(null), 3000);
  };


  // Function to safely inject TradingView widget script
  const injectTradingViewWidget = (symbol: string) => {
    // Remove existing script if it exists
    const existingScript = document.getElementById('tradingview-widget-script');
    if (existingScript) {
        existingScript.remove();
    }
    
    // Remove existing container content
    const container = document.getElementById('tradingview-widget-container');
    if (container) {
        container.innerHTML = '';
    }

    const script = document.createElement('script');
    script.id = 'tradingview-widget-script';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": symbol,
      "interval": "60",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "support_host": "https://www.tradingview.com"
    });
    
    // Append to the dedicated div
    if (container) {
        container.appendChild(script);
    }
  };

  
useEffect(() => {
  if (!investmentId) return;

  const fetchInvestmentDetails = async () => {
    try {
      const token = localStorage.getItem("token") || 'mock-token';
      const data = await fetchInvestment(investmentId, token);

      if (data?.investment) {
        setInvestment(data.investment);
        setBalanceHistory(data.balanceHistory || []);
        const symbol = assetSymbolMap[data.investment.asset];
        if (symbol) injectTradingViewWidget(symbol);
        else setError(`Trading symbol for asset ${data.investment.asset} is not supported.`);
      } else {
        setError("Investment not found or failed to load.");
      }
    } catch (err: any) {
      const message = err.message || "Failed to fetch investment details.";
      setError(message);
      showToast(message, 'error');
      setInvestment(null);
    } finally {
      setLoading(false);
    }
  };

  fetchInvestmentDetails();

  return () => {
    const existingScript = document.getElementById('tradingview-widget-script');
    if (existingScript) existingScript.remove();
  };
}, [investmentId]);
// Handle navigation using standard window.location (replaces Link component)
  const handleBackClick = () => {
    window.location.href = '/dashboard/investment'; 
  };
  
  const handleMarketItemClick = (coin: string) => {
      // Simulate switching the main chart to the clicked coin
      const symbol = assetSymbolMap[coin];
      if (symbol) {
          injectTradingViewWidget(symbol);
          showToast(`Switching chart to ${coin}/USDT`, 'success');
      } else {
          showToast(`Trading symbol for ${coin} is not supported.`, 'error');
      }
  }
useEffect(() => {
  if (typeof window !== "undefined") {
    const id = getQueryParam('id');
    setInvestmentId(id);
  }
}, []);
// Dummy data for transactions (replace with fetched data)
const TransactionHistory = [
  { id: 1, type: 'DEPOSIT', amount: investment?.amount, status: 'Completed', date: investment?.date, tx_id: '0x9a8b...' },
];
  if (loading) {
    return (
      <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <CircularProgress className="text-green-500" />
        <Typography variant="h6" className="mt-4">Loading trading data...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-red-500 p-4">
        <Typography variant="h5" className="font-bold mb-4">We are working on this, please reload</Typography>
        <Typography variant="body1" className="text-center mb-6">{error}</Typography>
        <Button 
            variant="contained" 
            onClick={handleBackClick} 
            className="bg-green-600 hover:bg-green-700 text-white"
        >
          <ArrowBack className="mr-2" /> Back to Investments
        </Button>
      </Box>
    );
  }

  if (!investment) {
      return (
        <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <Typography variant="h5" className="font-bold mb-4">Investment Not Found</Typography>
            <Button 
                variant="contained" 
                onClick={handleBackClick} 
                className="bg-green-600 hover:bg-green-700 text-white"
            >
                <ArrowBack className="mr-2" /> Back to Investments
            </Button>
        </Box>
      );
  }
 
  // --- Main Trading View Layout ---
  return (
    <Box className="min-h-screen bg-gray-100 text-white p-4 sm:p-6 lg:p-8 relative">
      
      {/* Custom Toast Message (replaces Swal) */}
      {toastMessage && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-xl text-white transition-opacity duration-300 ${toastMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
          {toastMessage.message}
        </div>
      )}

      {/* Header & Back Button */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <Button 
            variant="outlined" 
            onClick={handleBackClick} 
            className="text-green-500 border-green-500 hover:bg-green-900/50"
        >
          <ArrowBack className="mr-1" /> Back to Portfolio
        </Button>
        <Typography className='font-extrabold text-gray-800 text-[20px] md:text-[40px]'>
          {investment.asset} <span className='text-green-500'>Trading Terminal</span>
        </Typography>
        <Link href={'/'}>
        <AccountBalanceWallet className='text-green-500 text-4xl' />
        </Link>
      </div>

      <Grid container spacing={4}>
        
        {/* === Left Column: Chart and Transactions (Main Content) === */}
        <Grid item xs={12} lg={8}>
          
          {/* 1. TradingView Chart Widget */}
          <Card className="bg-[#003b2f] rounded-xl shadow-2xl h-[55vh] mb-6">
            <CardContent className="h-full p-0">
              <Typography variant="h5" className="p-4 font-semibold border-b border-gray-700 text-white">
                Live Price Chart: {investment.asset}/USDT
              </Typography>
              {/* TradingView Widget Container - Must have height/width */}
              <div id="tradingview-widget-container" className="w-full h-[calc(55vh-68px)]">
                {/* Fallback/Loading message for the widget */}
                <Box className="flex items-center justify-center w-full h-full text-gray-400">
                    <CircularProgress size={20} className="text-green-500 mr-2" />
                    <span>Loading TradingView Chart for {investment.asset}...</span>
                </Box>
              </div>
            </CardContent>
          </Card>
          
          {/* 2. Transaction History */}
          <Card className="bg-[#003b2f] rounded-xl shadow-2xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 border-b border-gray-700 pb-3 mb-4">
                <History className="text-cyan-400" />
                <Typography variant="h5" className="font-semibold text-white">
                  Transaction History for Investment ID: {investmentId?.substring(0, 8)}...
                </Typography>
              </div>
              
              <Box className="max-h-60 overflow-y-auto custom-scrollbar">
                {TransactionHistory.map((tx) => (
                  <div key={tx.id} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors px-2 rounded-lg">
                    <div className="flex flex-col">
                      <Typography className={`font-bold ${tx.type === 'DEPOSIT' ? 'text-green-400' : 'text-cyan-400'}`}>
                        {tx.type}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        {tx.date}
                      </Typography>
                    </div>
                    <div className="text-right">
                      <Typography className="font-semibold text-white">
                        ${tx.amount?.toFixed(2)}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        TX ID: {tx.tx_id}...
                      </Typography>
                    </div>
                  </div>
                ))}
                {balanceHistory.length > 0 ? (
    balanceHistory
      .slice() // copy to avoid mutating
      .reverse() // show latest first
      .map((record, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors px-2 rounded-lg"
        >
          <div className="flex flex-col">
            <Typography className="font-bold text-cyan-400">
              Profit Time: <span className='text-[12px]'>{new Date(record.date).toLocaleString()}</span>
            </Typography>
            <Typography variant="caption" className="text-green-400">
              Change: {record.difference > 0 ? '+' : ''}${record.difference.toFixed(2)} ({record.percentageChange}%)
            </Typography>
          </div>
          <div className="text-right">
            <Typography className="text-white font-semibold">
              New Balance: ${record.newBalance.toFixed(2)}
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Old: ${record.oldBalance.toFixed(2)}
            </Typography>
          </div>
        </div>
      ))
  ) : (
    <Typography className="text-gray-500 text-center py-4">No balance updates yet.</Typography>
  )}
              </Box>
            </CardContent>
          </Card>
          
        </Grid>

        {/* === Right Column: Market Data (Side Panel) === */}
        <Grid item xs={12} lg={4}>
          
          {/* 3. Investment Details Card */}
          <Card className="bg-[#003b2f] rounded-xl shadow-2xl mb-6 border-l-4 border-green-500">
            <CardContent className="p-4">
                <Typography variant="h6" className="font-bold text-white mb-3 border-b border-gray-700 pb-2">
                    Investment Summary
                </Typography>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <Typography className="text-gray-400">Asset:</Typography>
                        <Typography className="font-bold text-green-400">{investment.asset}</Typography>
                    </div>
                    <div className="flex justify-between">
                        <Typography className="text-gray-400">Amount:</Typography>
                        <Typography className="font-bold text-white">${investment.amount.toFixed(2)}</Typography>
                    </div>
                    <div className="flex justify-between">
                        <Typography className="text-gray-400">Plan:</Typography>
                        <Typography className="font-bold text-cyan-400">{investment.plan}</Typography>
                    </div>
                    <div className="flex justify-between">
                        <Typography className="text-gray-400">Status:</Typography>
                        <Typography className={`font-bold uppercase ${investment.status.toLowerCase() === 'running' ? 'text-green-500' : 'text-red-500'}`}>{investment.status}</Typography>
                    </div>
                </div>
            </CardContent>
          </Card>

          {/* 4. Crypto Market Widget (Simulated for BTC, ETH, USDT, XRP) */}
          <Card className="bg-[#003b2f] rounded-xl shadow-2xl">
            <CardContent className="p-4">
              <Typography variant="h6" className="font-semibold text-white mb-3 border-b border-gray-700 pb-2">
                Live Market Ticker (Click to view chart)
              </Typography>
              
              <div className="space-y-3">
                {['BTC', 'ETH', 'USDT', 'XRP'].map((coin) => (
                    <div 
                        key={coin} 
                        className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                        onClick={() => handleMarketItemClick(coin)} // Add click handler
                    >
                        <div className="flex items-center space-x-2">
                            {/* Icon Placeholder */}
                            <Box className={`w-3 h-3 rounded-full ${coin === 'BTC' ? 'bg-yellow-500' : coin === 'ETH' ? 'bg-purple-500' : coin === 'USDT' ? 'bg-teal-400' : 'bg-gray-400'}`}></Box>
                            <Typography className="font-bold text-white">{coin}/USD</Typography>
                        </div>
                        <div className="text-right">
                            <Typography className="text-green-400 font-semibold text-lg">
                                {/* Simulate live price and change */}
                                ${Math.floor(Math.random() * 50000 + 10000).toFixed(2)}
                            </Typography>
                            <Typography className="text-sm text-green-500">
                                +{Math.random() * 5 + 1.01}%
                            </Typography>
                        </div>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
        </Grid>
      </Grid>
      


    </Box>
  );
};

export default CryptoTradingPage;
