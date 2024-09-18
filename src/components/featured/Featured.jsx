import React, { useState, useEffect } from 'react';
import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Resize event listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='featured'>
      <div className="top">
        <div className="title">
          Total Applications
        </div>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className="title">Total applications made today</p>
        <p className="amount">5</p>
        <p className="desc">Previous day may not reflect</p>
        <div className={`summary ${isMobile ? 'mobile' : 'desktop'}`}>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className="resultAmount">10</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className="resultAmount">25</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className="resultAmount">50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
