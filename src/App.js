import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <BookList />
                <Footer />
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
