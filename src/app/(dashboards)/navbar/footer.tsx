import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function DesktopFooter() {
  return (
    <Box className="hidden sm:block bg-[#efefef] w-full py-4 px-5 fixed bottom-0 "> 
      <Typography variant="body2" align="left" color="textSecondary" className="text-gray-600">
        {new Date(Date.now()).getFullYear()} © MirrorXTrade All rights reserved
      </Typography>
    </Box>
  );
}

export default DesktopFooter