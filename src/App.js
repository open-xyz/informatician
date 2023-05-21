import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import BookList from "./pages/books/BookList";
import About from "./pages/about/About";

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
