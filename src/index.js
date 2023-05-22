import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout/Layout';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
