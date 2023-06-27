import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const id = localStorage.getItem("bookId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const fileName = file.name;
      data.append("name", fileName);
      data.append("file", file);
      if (id) {
        toast.loading("Uploading...");
        try {
          await axios.post("http://localhost:5000/api/upload", data);
          await axios.put("http://localhost:5000/api/book/" + id, {
            bookpdf: fileName,
          });
          navigate("/success");
          localStorage.clear();
        } catch (err) {
          toast.error("Something went wrong!");
          console.log(err);
        }
      } else {
        toast.error("Add book deatils!");
      }
    } else {
      toast.error("Choose a file to upload!");
    }
  };

  return (
    <div
      className="upload p-10 d-flex flex-column justify-content-center
    align-items-center"
    >
      <h2 className="fs-2 fw-bolder">Upload Books</h2>
      <div
        className="upload-box my-5 p-10 d-flex flex-column justify-content-center
    align-items-center"
      >
        <input
          type="file"
          name=""
          id="upload-btn"
          accept=".pdf, .txt, .doc, .ppt, .xls, .docx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="mb-5" id="label" for="upload-btn">
          Select Books To Upload <LibraryBooksIcon className="ml-2" />
        </label>
        {file && (
          <p className="uploaded m-1">
            {file.name}
            <CloseIcon
              className="close-icon ml-10 cursor-pointer"
              onClick={() => setFile(null)}
            />
          </p>
        )}
        <button className="mt-4" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <p className="mt-0">
        Supported file types: pdf, txt, doc, ppt, xls, docx, and more
      </p>

      <ToastContainer />
    </div>
  );
}
