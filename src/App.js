import React from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import BookList from './components/BookList';
import Footer from './components/Layout/Header/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';

class App extends React.Component {
  render() {
    return (
        <div>
          <BookList/>
        </div>
    );
  }
}

export default App;
