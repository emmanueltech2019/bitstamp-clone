
'use client'
import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Logo from "../../../app/(home)/hero/img/logo2.png";
import SmallLogo from "../../nav/img/small-logo.png"; // Add a smaller version of the logo
import UserIcon from "../../nav/img/elon.jpeg";
import Image from 'next/image';
import axios from '../../../utils/axios';

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Menu as MenuIcon,
  Fullscreen as FullscreenIcon,
  FullscreenExit as FullscreenExitIcon,
  Notifications as NotificationsIcon,
  KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  PersonPinOutlined as PersonPinOutlinedIcon,
  WalletOutlined as WalletOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  HouseOutlined as HouseOutlinedIcon,
  QuestionMarkOutlined as QuestionMarkOutlinedIcon,
  GroupAddOutlined as GroupAddOutlinedIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  AddCardOutlined as AddCardOutlinedIcon,
  CreditScoreOutlined as CreditScoreOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon
} from '@mui/icons-material';
import { NavBarContext } from '../../context/NavBar';
import Swal from 'sweetalert2';
// import GoogleTranslate from './TransLate';

const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isCollapsed, toggleSidebar } = useContext(NavBarContext); 



  interface ProfileData {
    name: string;
    email: string;
    // Add more profile fields as needed
  }
const [profileData, setProfileData] = useState<ProfileData | null>(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

const handleLogout = () =>{
  Swal.fire({
    title: "Are you sure you want to logout?",
    text: "You would have to login to access your dashboard again.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Success!",
        text: "You have been logout successfully.",
        icon: "success"
      }).then(()=>{
        localStorage.clear()
        setTimeout(() => {
          window.location.href="/login"
        }, 3000);
      })
    }
  });
}


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
        setError(error.response?.data.message || 'An error occurred fetching profile data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once on mount



  return (

                
        <>
        <div className='fixed md:left-0 md:-bottom-14 bottom-12 z-[100]'>
        {/* <GoogleTranslate/>  */}
        </div>
        <AppBar position="fixed" sx={{ backgroundColor: '#003b2f', height: '80px', zIndex: '2',  }} className=''>
          <Toolbar>
            <div className={`sm:flex sm:flex-row flex-row-reverse sm:justify-between ${isCollapsed ? 'md:pl-16' : 'md:pl-60'} w-screen`}>
              <div className="pt-20 hidden md:block">
                
                {/* <IconButton color="inherit" aria-label="toggle sidebar" onClick={()=>toggleSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton> */}
              </div>

              <div className="flex w-fit flex-row-reverse justify-between content-between  md:flex-row w-full md:w-auto">
                <IconButton color="inherit" size="large" onClick={toggleFullscreen}>
                  {isFullscreen ? <FullscreenExitIcon className="text-[30px] mt-3  " /> : <FullscreenIcon className="text-[30px] mt-3" />}
                </IconButton>
                {/* <IconButton color="inherit">
                  <Badge badgeContent={4} color="primary" sx={{ '& .MuiBadge-badge': { color: 'white', backgroundColor: 'green' } }}>
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */}
                <div>
                  <Button
                    ref={buttonRef}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="text-white flex space-x-2 justify-center align-middle items-center pt-6"
                    endIcon={<KeyboardArrowDownOutlinedIcon />}
                  >
                    {/* <Image src={UserIcon} alt="alt" className="rounded-full w-10 h-10" /> */}
                    <p>Hi, {profileData?.name}</p>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                      sx: { minWidth: buttonRef.current ? buttonRef.current.offsetWidth : 'auto' },
                    }}
                  >
                    <Link href={"/dashboard/profile"}>
                      <MenuItem onClick={handleClose} className="flex space-x-2 text-[13px]">
                        <AccountCircleOutlinedIcon /> <p>Profile</p>
                      </MenuItem>
                    </Link>
                    <Link href={"/dashboard/wallets"}>
                      <MenuItem onClick={handleClose} className="flex space-x-2 text-[13px]">
                        <AccountBalanceWalletOutlinedIcon /> <p>My Wallet</p>
                      </MenuItem>
                    </Link>
                    <Link href={"/dashboard/kyc"}>
                    <MenuItem onClick={handleClose} className="flex space-x-2 text-[13px]">
                      <PersonPinOutlinedIcon /> <p>Kyc Verification</p>
                    </MenuItem>
                    </Link>
                    {/* <Link href={"/dashboard/wallets"}>
                      <MenuItem onClick={handleClose} className="flex space-x-2 text-[13px]">
                        <WalletOutlinedIcon /> <p>Your Wallet Address </p>
                      </MenuItem>
                    </Link> */}
                    <hr />
                    <MenuItem onClick={handleLogout} className="flex space-x-2 text-red-600 text-[13px]">
                      <LogoutOutlinedIcon /> <p>Logout</p>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <nav className={`bg-[#003b2f] h-screen fixed top-0 left-0 z-10 ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} w-20 hidden sm:block`}>
          <div className={`max-w-7xl mx-auto px-2 py-3 ${isCollapsed ? 'px-1' : 'sm:px-6 lg:px-8'}`}>
            <div className="relative flex items-left justify-left">
              <div className="items-left justify-left sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 grid place-items-center">
                  <Image src={isCollapsed ? SmallLogo : Logo} alt="alt" className={`${isCollapsed ? 'w-[60px]' : 'w-[250px]'}`} />
                </div>
                <div className={`sm:block sm:ml-0 ${isCollapsed ? 'hidden' : 'space-y-4'} mt-10`}>
                  {[
                    { href: '/dashboard', icon: <HouseOutlinedIcon />, label: 'Dashboard' },
                    { href: '/dashboard/deposit', icon: <AddCardOutlinedIcon />, label: 'Deposits' },
                    { href: '/dashboard/withdraw', icon: <CreditScoreOutlinedIcon />, label: 'Withdrawal' },
                    { href: '/dashboard/investment', icon: <ReceiptOutlinedIcon />, label: 'Trading Plan' },
                    { href: '/dashboard/transactions', icon: <AccountBalanceWalletOutlinedIcon />, label: 'Transactions' },
                    { href: '/dashboard/referrals', icon: <GroupAddOutlinedIcon />, label: 'Referrals' },
                    { href: '/dashboard/support', icon: <QuestionMarkOutlinedIcon />, label: 'Help' }
                  ].map((item, index) => (
                    <Link href={item.href} legacyBehavior key={index}>
                      <a className={`text-gray-300 hover:bg-[#00C77B] hover:text-[#F3F3F3] py-3 rounded-full px-3 text-sm font-medium flex space-x-3 items-center justify-center lg:justify-start`}>
                        <span>{item.icon}</span>
                        {/* <p>{isCollapsed?"tru":"fal"}</p> */}
                        <span className={`hidden lg:block ${isCollapsed ? 'lg:hidden' : 'lg:block'}`}>{item.label}</span>
                      </a>

                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
        </>


  );
};

export default Navbar;
