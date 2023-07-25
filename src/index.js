import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client" instead of "react-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { backendURL } from './utils/impURLs';
(async () => {
  try {
    const response = await axios.get(`${backendURL}/ClientId`);
    const { clientid } = response.data;
    console.log(clientid);

    createRoot(document.getElementById('root')).render( // Use createRoot from "react-dom/client"
      <GoogleOAuthProvider clientId={clientid}>
        <React.StrictMode>
          <App />
          <ToastContainer />
        </React.StrictMode>
      </GoogleOAuthProvider>
    );
  } catch (error) {
    console.error('Failed to fetch clientId:', error);
  }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
