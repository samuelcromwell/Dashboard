import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './single.scss'
import Chart from "../../components/chart/Chart";
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Projects</h1>
            <div className="item">
            
              <div className="details">
                <h1 className="itemTitle">EcoTracking</h1>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">ongoing</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Start Date:</span>
                  <span className="itemValue">15th August 2024</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Estimated Completion:</span>
                  <span className="itemValue">30th November 2024
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Team Members:</span>
                  <span className="itemValue">8</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Objective:</span>
                  <span className="itemValue">To develop a comprehensive platform for tracking carbon emissions across industries using AI and data analytics</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect = {3 / 1} title='User applications (Last 6 months)' />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recent Transactions</h1>
          <List />
        </div>
      </div>
      
    </div>
  )
}

export default Single
