import React, { useState } from "react";
import "./BookList.css";
import ScrollToTopButton from "./ScrollButton";

export default function BookList() {
  const [books, setBooks] = useState([
    { name: "Book1" },
    { name: "Book2" },
    { name: "Book3" },
    { name: "Book4" },
  ]);

  const booksComponent = books.map((book) => (
    <li className="book-list-item">{book.name}</li>
  ));
 
  return (
    <>
    <div className="book-list-container">
      <h1 className="book-list-title">Book List</h1>
      <ul className="book-list">{booksComponent}</ul>
    </div>
    <ScrollToTopButton />
    </>
    
  );
}
