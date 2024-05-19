"use client"

import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
function MobileBottomNavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper 
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }}
      elevation={3}
      className="sm:hidden text-[#003b2f] !important" // Only show on small screens (mobile)
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Help?" icon={<HelpOutlineIcon className='text-[#003b2f] !important' />} />
        <BottomNavigationAction label="Referral" icon={<PeopleAltIcon className='text-[#003b2f] !important'/>} />
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon className='bg-[#003b2f] rounded w-16 h-10 text-white' />}  />
        <BottomNavigationAction label="Invest" icon={<AddCircleOutlineIcon className='text-[#003b2f]' />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon className='text-[#003b2f]' />} />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileBottomNavBar;
