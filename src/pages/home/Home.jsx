import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import List from '../../components/table/Table'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title='Last 6 months (Monthly Revenue)' />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            <h1 className="title">Recent Transactions</h1>
            <List />
          </div>
        </div>
        </div>  
    </div>
  )
}

export default Home
