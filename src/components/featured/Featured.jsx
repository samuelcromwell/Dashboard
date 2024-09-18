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
  
      // Disable ESLint warning for unused variable
      // eslint-disable-next-line no-unused-vars
      const triggerReflow = document.body.offsetHeight; // Trigger the reflow
    };
  
    handleResize(); // Ensure it runs on mount
  
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`featured ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="top">
        <div className="title">
          Total Sales
        </div>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className="title">Completed transactions</p>
        <p className="amount">6</p>
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
