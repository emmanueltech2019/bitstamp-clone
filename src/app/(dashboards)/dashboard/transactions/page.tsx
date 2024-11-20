"use client"
import React, {useState, useEffect, MouseEvent} from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios2 from '../../../../utils/axios';
import { v4 as uuidv4 } from 'uuid';


const columns: GridColDef[] = [
  { field: 'amount', headerName: 'Amount', flex: 1,},
  
  {
    field: 'currency',
    headerName: 'Payment Method',
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    type: 'string',
    // valueGetter: (params: GridValueGetterParams) => new Date(params.value),
  },
];






export default function Transactions() {
  const [alignment, setAlignment] = useState('deposits');

  interface Row {
    amount: number;
    currency: string;
    date: string; // Use a specific date type if needed, e.g., Date
  }

  interface Deposit { // Define the structure of a single deposit
    refId: string;
    amount: number;
    worth: number;
    currency: string;
    status: string;
    date: string;
  }
  const [rows, setRows] = useState<Row[]>([]);
  const [deposits, setDeposits] = useState<Deposit[]>([]); // Use Deposit interface
  const [withdrawals, setWithdrawals] = useState<Deposit[]>([]);
  
  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    if (newAlignment === 'deposit') {
      setRows(deposits);
    } else if (newAlignment === 'withdrawal') {
      // alert("Please")
      console.log(withdrawals)
      setRows(withdrawals);
    }
  };

  useEffect(() => {
    const fetchDeposits = async () => { 
      try {
        // const response = await axios2.get(`/user/deposits`, {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        // });
        // console.log(response.data);
        // setDeposits(response.data);
        // // const addRow = (newRow: Row) => {
        //   setRows([...rows,response.data]);
        // // };
  
        const depositsResponse = await axios2.get(`/user/deposits`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const withdrawalsResponse = await axios2.get(`/user/withdrawals`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        setDeposits(depositsResponse.data);
        setWithdrawals(withdrawalsResponse.data);

        // Initially set to deposits
        setRows(depositsResponse.data);

      
      } catch (error) {
        console.error("Error fetching deposits:", error);
      }
    };
  
    fetchDeposits();
  
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array means this runs once after initial render

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
        <ToggleButton value="withdrawal" className="px-4 py-2 rounded-md text-sm font-medium">Withdrawal History</ToggleButton>
      </ToggleButtonGroup>

      <div style={{ height: 400, width: '100%' }}>
        
        <DataGrid
          rows={rows}
          columns={columns}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
          getRowId={() => uuidv4()} 
          // disableSelectionOnClick
        />
      </div>
    </Box>
  );
}
