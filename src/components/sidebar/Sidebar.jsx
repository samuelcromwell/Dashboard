import React, { useState } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';  // menu icon for the toggle button
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track sidebar state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Toggle Button for Mobile */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <MenuIcon />
      </button>

      {/* Sidebar content */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>  
        <div className='top'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span className="logo">Shamba Records</span>
          </Link>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN</p>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li>
                <DashboardIcon className='icon' />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to='/reports' style={{ textDecoration: 'none' }}>
              <li>
                <CreditCardIcon className='icon' />
                <span>Reports</span>
              </li>
            </Link>
            <p className="title">SERVICE</p>
            <Link to='/settings' style={{ textDecoration: 'none' }}>
              <li>
                <SettingsIcon className='icon' />
                <span>Settings</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
