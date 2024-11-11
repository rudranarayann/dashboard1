import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
export const loginAPI = async (username, password) => {
    console.log("API called with:", username, password); // Log to check values
  
    // Mock login logic
    if (username === 'testuser' && password === 'testpass') {
      console.log("Login successful");
      return { username: 'testuser', name: 'Test User' };
    } else {
      console.log("Login failed");
      throw new Error('Invalid credentials');
    }
  };
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
