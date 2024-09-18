import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.scss';
import MenuIcon from '@mui/icons-material/Menu';

const Settings = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false); // State to toggle sidebar

  // Add a resize listener to detect window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to toggle sidebar visibility in mobile view
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="settings">
      {isMobile && (
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      )}

      {(!isMobile || showSidebar) && <Sidebar />} {/* Hide Sidebar in mobile view and toggle */}
      
      <div className={`settingsContainer ${showSidebar && isMobile ? 'shifted' : ''}`}>
        <div className="settingsFormContainer">
          <h1 className="settingsTitle">Settings</h1>

          <div className="settingsSection">
            <h2 className="sectionTitle">General Settings</h2>
            <div className="settingsItem">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Your username" />
            </div>
            <div className="settingsItem">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
          </div>

          <div className="settingsSection">
            <h2 className="sectionTitle">Security Settings</h2>
            <div className="settingsItem">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="New password" />
            </div>
            <div className="settingsItem">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm password" />
            </div>
          </div>

          <div className="settingsSection">
            <h2 className="sectionTitle">Notifications</h2>
            <div className="settingsItem">
              <label htmlFor="notifications">Receive Notifications</label>
              <select id="notifications">
                <option value="email">Email</option>
                <option value="sms">SMS</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <button className="saveButton">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
