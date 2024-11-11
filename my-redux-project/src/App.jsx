import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Conditional rendering for login state */}
      {isLoggedIn ? (
        <>
          <button onClick={toggleSidebar} className="sidebar-toggle">
            {isSidebarOpen ? '✖' : '☰'} {/* Cross and hamburger icons */}
          </button>
          <Sidebar isOpen={isSidebarOpen} />
          <Dashboard />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
