import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

upload_book_feature
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Book Listing App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/books">Books</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/add">Add a Book</a>
                </li>
              </ul>
            </div>
=======
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">Book Listing App</div>
        <div className={`navbar-items ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search"
              className="navbar-search-input"
            />
            <button className="navbar-search-button">Search</button>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <div className={`navbar-toggle-line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`navbar-toggle-line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`navbar-toggle-line ${isMenuOpen ? "open" : ""}`}></div>
          </div>
          <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/books" onClick={toggleMenu}>Books</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
main
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
