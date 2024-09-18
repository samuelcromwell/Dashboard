import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'April', Total: 34000},
    { name: 'May', Total: 21000},
    { name: 'June', Total: 64000},
    { name: 'July', Total: 58000},
    { name: 'August', Total: 60000},
    { name: 'September', Total: 78000}
];

const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
    <div className="title">{title}</div>
    <ResponsiveContainer width= '100%' aspect={aspect}>
     <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
</ResponsiveContainer>
</div>
  )
}

export default Chart
