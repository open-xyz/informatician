import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Upload.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";

export default function Upload() {
  const [books, setBooks] = useState([]);

  function addBook(e) {
    const newBook = e.target.files[0].name.split(".")[0];

    setBooks((prevBooks) => {
      return [...prevBooks, newBook];
    });
  }

  function deleteBook(id) {
    setBooks((prevBooks) => {
      return prevBooks.filter((book, ind) => {
        return ind !== id;
      });
    });
  }

  return (
    <div
      className="upload p-10 d-flex flex-column justify-content-center
    align-items-center"
    >
      <h1 className="fs-1 fw-bolder">Upload Books</h1>
      <div
        className="upload-box my-5 p-10 d-flex flex-column justify-content-center
    align-items-center"
      >
        <input
          type="file"
          name=""
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={addBook}
        />
        <label className="mb-5" id="label" for="upload-btn">
          Select Books To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        {books.map((book, ind) => {
          return (
            <p className="uploaded m-1" key={ind}>
              {book}{" "}
              <CloseIcon
                className="close-icon ml-10 cursor-pointer"
                onClick={(handleClick) => {
                  deleteBook(ind);
                }}
              />
            </p>
          );
        })}
        <Link to="/success">
          <button className="mt-4">Submit</button>
        </Link>
      </div>
      <p>Supported file types: pdf, txt, doc, ppt, xls, docx, and more</p>
    </div>
  );
}
