import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleSidebar(); // Toggling sidebar state in the parent
  };

  useEffect(() => {
    // Fetch user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="hamburger-icon" onClick={handleToggle}>
          {isOpen ? '✖' : '☰'} {/* Hamburger/Cross icon toggle */}
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="user-table">
        <h2>User Entered Credentials</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userData ? (
              <tr>
                <td>{userData.username}</td>
                <td>{userData.password}</td> {/* Show password here */}
              </tr>
            ) : (
              <tr>
                <td colSpan="2">No user data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Navbar;
