import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1245891,
      provider: "Shopify",
      description: "E-commerce Software Subscription",
      date: "15 February",
      amount: "29.99",
      status: "Completed",
    },
    {
      id: 1234567,
      provider: "Google Cloud",
      description: "Cloud Hosting Service",
      date: "12 February",
      amount: "99.00",
      status: "Pending",
    },
    {
      id: 9876543,
      provider: "Apple Store",
      description: "MacBook Pro Purchase",
      date: "10 February",
      amount: "1,299.00",
      status: "Completed",
    },
    {
      id: 5647382,
      provider: "Netflix",
      description: "Monthly Subscription",
      date: "7 February",
      amount: "9.99",
      status: "Completed",
    },
    {
      id: 7854123,
      provider: "Amazon",
      description: "Wireless Headphones",
      date: "4 February",
      amount: "59.99",
      status: "Cancelled",
    },
    {
      id: 1928374,
      provider: "Spotify",
      description: "Premium Membership",
      date: "1 February",
      amount: "14.99",
      status: "Completed",
    },
    {
      id: 4536271,
      provider: "Microsoft",
      description: "Office 365 Subscription",
      date: "30 January",
      amount: "69.99",
      status: "Cancelled",
    },
    {
      id: 3322558,
      provider: "Udemy",
      description: "Online Course Purchase",
      date: "28 January",
      amount: "19.99",
      status: "Completed",
    },
  ];
  
  return (
    <TableContainer component={Paper} className ='table'>
            <h1 className="title">Latest Transactions</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Transaction ID</TableCell>
            <TableCell className="tableCell">Provider</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Transaction Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Transaction Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
            <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.provider} </TableCell>
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status {row.status}`}>{row.status}</span>
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
