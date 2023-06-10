import React from "react";
import "./AddBooks.css";
import Upload from "./Upload";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBooks = () => {
  const bookName = useRef();
  const authorName = useRef();
  const publisher = useRef();
  const pages = useRef();
  const img = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const books = {
      bookName: bookName.current.value,
      authorName: authorName.current.value,
      publisher: publisher.current.value,
      pages: pages.current.value,
      img: img.current.value,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/book/add", books);
      toast.success("Book details added!!Upload the book.");
      localStorage.setItem("bookId", res.data);
    } catch (err) {
      toast.error("Fill all the details!");
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="addBooks-container">
        <div className="add-books text-white">
          <h1 className="text-dark form-title">Add Books</h1>
          <form className="Boxx" onSubmit={handleSubmit}>
            <input
              className="Inputt"
              type="text"
              placeholder="Book Name"
              ref={bookName}
            />
            <input
              className="Inputt"
              type="text"
              placeholder="Author Name"
              ref={authorName}
            />
            <input
              className="Inputt"
              type="text"
              placeholder="Publisher"
              ref={publisher}
            />
            <input
              className="Inputt"
              type="number"
              placeholder="Pages"
              ref={pages}
            />
            <input
              className="Inputt"
              type="text"
              placeholder="Img Url"
              ref={img}
            />
            <button className="Buttonn" type="submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
      <Upload />
      <ToastContainer />
    </div>
  );
};

export default AddBooks;
