// src/api/index.js
export const loginAPI = (username, password) => {
  return new Promise((resolve, reject) => {
    // Mock login - replace this with your actual API call
    setTimeout(() => {
      if (username === "user" && password === "password") {
        resolve({ username, token: "fake-jwt-token" }); // Success case
      } else {
        reject(new Error("Invalid credentials")); // Failure case
      }
    }, 500); // Simulating network delay
  });
};
