import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/authSlice';
import { loginAPI } from '../api';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);

    try {
      const user = await loginAPI(username, password);
      dispatch(loginSuccess(user));

      // Store user data (including password) in localStorage
      const userData = { username, password, name: 'Test User' };  // Store the username, password, and name
      localStorage.setItem('user', JSON.stringify(userData));

      alert('Successfully logged in!');
    } catch (err) {
      console.error("Error:", err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
