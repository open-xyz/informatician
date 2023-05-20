import React, { useState } from "react";

export default function BookList() {
  const [books, setBooks] = useState([{ name: "Book1" }, { name: "book2" }]);

  let bookComponent = books.map((book) => (
    <li className="book-list-item">{book.name}</li>
  ));

  return (
    <div className="body">
      <div className="book-list-container">
        <h1 className="book-list-title">Book List</h1>
        <ul className="book-list">{bookComponent}</ul>
      </div>
    </div>
  );
}
