import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/authors">Authors</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to Book Listings</h1>
      </header>
      <main>
        <h2>Featured Books</h2>
        <ul>
          <li><a href="/books/1">Book 1</a></li>
          <li><a href="/books/2">Book 2</a></li>
          <li><a href="/books/3">Book 3</a></li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2023 Book Listings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
