'use client'
import { useState } from 'react';
import Link from 'next/link';
import Logo from "../../nav/img/Bitstamp-Logo-PNG-Image.png"
import Image from 'next/image';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { icons } from './icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
          {/* Topbar */}
          <AppBar position="fixed" sx={{ backgroundColor: '#003b2f', height: '80px', zIndex: "1" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleMenu}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="left" open={isOpen} onClose={toggleMenu}>
        <List>
          {Object.entries(icons).map(([name, Icon]) => (
            <ListItem button key={name}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    <nav className="bg-[#003b2f] w-64 h-screen z-10">
      <div className="max-w-7xl mx-auto px-2 py-3 sm:px-6 lg:px-8">
        <div className="relative flex items-left justify-left">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

          </div>
          <div className="items-left justify-left sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 grid place-items-center">
            <Image src={Logo} alt="alt" className='w-[200px]' />
          </div>
            <div className="hidden sm:block sm:ml-0">
              <div className="flex space-y-4 flex-col mt-10 ">
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <HouseOutlinedIcon/> <p className=''>Dashboard</p>
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <AddCardOutlinedIcon/> <p className=''>Deposits</p>
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <CreditScoreOutlinedIcon/> <p className=''>Withdrawal</p>
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <ReceiptOutlinedIcon/> <p className=''>Trading Plan</p>
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <AccountBalanceWalletOutlinedIcon/> <p className=''>Transactions</p>
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <GroupAddOutlinedIcon/> <p className=''>Referrals</p>
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-full px-3 text-sm font-medium flex space-x-2 content-center align-middle items-center">
                    <QuestionMarkOutlinedIcon/> <p className=''>Help</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
