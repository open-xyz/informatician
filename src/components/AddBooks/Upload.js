import React, { useState } from "react";
import "./Upload.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";

export default function Upload() {
  const [books, setBooks] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  function addBook(newBook) {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }

  function deleteBook(id) {
    setBooks((prevBooks) => prevBooks.filter((book, ind) => ind !== id));
  }

  function handleDragEnter(e) {
    e.preventDefault();
    setIsDragActive(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragActive(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragActive(false);

    const file = e.dataTransfer.files[0];
    const newBook = file.name.split(".")[0];
    addBook(newBook);
  }

  return (
    <div className="upload p-10 d-flex flex-column justify-content-center align-items-center">
      <h1>Upload Book Here!</h1>
      <div
        className={`upload-box my-5 p-10 d-flex flex-column justify-content-center align-items-center ${
          isDragActive ? "drag-active" : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="mb-4" htmlFor="upload-btn">
          Select Books To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        <p className="drag-drop text-center">
          OR<br />
          Drag and drop files here
        </p>
        {books.map((book, ind) => (
          <p className="uploaded mt-4" key={ind}>
            {book}{" "}
            <CloseIcon
              className="close-icon ml-10 cursor-pointer"
              onClick={() => deleteBook(ind)}
            />
          </p>
        ))}
      </div>
      <p>Supported file types: pdf, txt, doc, ppt, xls, docx, and more</p>
    </div>
  );
}
