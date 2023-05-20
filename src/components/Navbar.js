import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Informatics Books</div>
      <div className="navbar-items">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
