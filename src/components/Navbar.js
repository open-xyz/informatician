import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">Book Listing App</div>
            <div className="navbar-items">
              <div className="navbar-search">
                <input type="text" placeholder="Search" className="navbar-search-input" />
                <button className="navbar-search-button">Search</button>
              </div>
              <a className="navbar-link" href="/">Home</a>
              <a className="navbar-link" href="/books">Books</a>
              <a className="navbar-link" href="/about">About</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
