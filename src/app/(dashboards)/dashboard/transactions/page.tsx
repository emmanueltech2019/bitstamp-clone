"use client"
import * as React from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'refId', headerName: 'Reference ID', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 120 },
  { field: 'worth', headerName: 'Worth', width: 120 },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    type: 'date',
  },
];

const rows: any = [
  // Replace with your actual transaction data 
];

export default function Transactions() {
  const [alignment, setAlignment] = React.useState('all');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box className="p-4"> {/* Add padding around the component */}
      <Typography variant="h6" component="h2" className="mb-2">TRANSACTIONS</Typography>
      <ToggleButtonGroup
        color="success"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="mb-4"
      >
        <ToggleButton value="deposit" className="px-4 py-2 rounded-md text-sm font-medium">Deposit History</ToggleButton>
        {/* <ToggleButton value="all" className="px-4 py-2 rounded-md text-sm font-medium">Focus</ToggleButton> */}
        <ToggleButton value="withdrawal" className="px-4 py-2 rounded-md text-sm font-medium">Withdrawal History</ToggleButton>
      </ToggleButtonGroup>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          checkboxSelection
          // disableSelectionOnClick
        />
      </div>
    </Box>
  );
}
