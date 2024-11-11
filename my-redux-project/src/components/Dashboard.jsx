import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="dashboard-content">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {/* <h2>Welcome to the Dashboard!</h2>
          <p>You have successfully logged in.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
