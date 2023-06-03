import React, { useState, useEffect } from "react";
import "./BookList.css";
import ScrollToTopButton from "../ScrollButton";
import Card from "../Card";
import { searchBooks } from "../../utils/searchBooks";
export default function BookList() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");

  useEffect(() => {
    if (bookName !== "") {
      searchBooks(bookName)
      .then(result=>setBooks(result))
      .catch(err=>{throw err})
    }
  }, [bookName]);


  // const booksComponent = books.map((book) => (
  //   <Card name={book.name} author={book.author}></Card>
  // ));

  return (
    <>
      <div className="book-list-container">
        <form>
          <label htmlFor="default-search" className="mb-200 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="flex mb-2 w-full justify-between">
            <input id="default-search" className=" mr-2 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => setBookName(event.target.value)}
              placeholder="Search Books" required />
            <div>
            <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </div>
        </form>
        <h1 className="book-list-title text-center">Book List</h1>
        {/* <div className="cards"> */}
        {
          books.length === 0 ?
            <div className="flex items-center justify-center h-[70vh] bg-white px-20">
              <h1 className="flex text-center items-center gap-4 text-4xl md:text-7xl">
                Search Books
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z" /></svg>
              </h1>
            </div> :
            <div className="cards">

              {
                books.map((book, key) => {
                  return (

                    <Card key={key} title={book.volumeInfo.title} description={book.volumeInfo.description} publisher={book.volumeInfo.publisher} pages={book.volumeInfo.pageCount} imgLink={book.volumeInfo.imageLinks} />
                  );
                })
              }
            </div>
        }
      </div>
      {/* </div> */}
      <ScrollToTopButton />
    </>

  );
}
