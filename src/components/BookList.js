import React from 'react';
import './BookList.css';

class BookList extends React.Component {
  render() {
    return (
      <div className="book-list-container">
        <h1 className="book-list-title">Book List</h1>
        <ul className="book-list">
          <li className="book-list-item">Book 1</li>
          <li className="book-list-item">Book 2</li>
          <li className="book-list-item">Book 3</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
