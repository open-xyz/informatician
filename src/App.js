import React from 'react';
import Navbar from './components/Layout/Navbar/Navbar';
import BookList from './components/BookList';
import Footer from './components/Layout/Header/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
        <div>
          <BookList/>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BookList />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
    );
  }
}

export default App;
