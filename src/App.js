import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookList from './components/BookList';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
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
      </Router>
    );
  }
}

export default App;
