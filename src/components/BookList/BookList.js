import React, { useState } from "react";
import "./BookList.css";
import ScrollToTopButton from "../ScrollButton";
import Card from "../Card";
export default function BookList() {
  const [books, setBooks] = useState([
    { name: "Book1" , author:"Author1" },
    { name: "Book2" , author:"Author2"},
    { name: "Book3" , author:"Author3"},
    { name: "Book4" , author:"Author4"},
      
   
  ]);

  // const booksComponent = books.map((book) => (
  //   <Card name={book.name} author={book.author}></Card>
  // ));
 
  return (
    <>
    <div className="book-list-container">
      <h1 className="book-list-title">Book List</h1>
      {/* <div className="book-list">{booksComponent}</div> */}
      <div className="cards">
        {books.map((item)=>{
          return( <Card name={item.name} author={item.author}/>);
        })}
      </div>
    </div>
    <ScrollToTopButton />
    </>
    
  );
}
