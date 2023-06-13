import React from "react";
import "./AddBooks.css";
import Upload from "./Upload";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
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
      <div className="quote text-center">
        Unleash the Power of Sharing:
        <br />
        Upload and Enrich Our Open Source Book Community!
      </div>
      <div className="addBooks-container">
        <div className="add-books text-white">
          <h1 className="text-dark form-title">
            Share Book Information Here!{" "}
            <AutoStoriesOutlinedIcon className="ml-2" />
          </h1>
          <form className="Boxx" onSubmit={handleSubmit}>
            <div className="group">
              <label htmlFor="bookName">Book Name:</label>
              <input
                id="bookName"
                type="text"
                className="input"
                placeholder="Please enter the book name"
                ref={bookName}
              />
            </div>
            <div className="group">
              <label htmlFor="author">Author Name:</label>
              <input
                id="author"
                type="text"
                className="input"
                placeholder="Please enter the author name"
                ref={authorName}
              />
            </div>
            <div className="group">
              <label htmlFor="publisher">Publisher Name:</label>
              <input
                id="publisher"
                type="text"
                className="input"
                placeholder="Please enter the publisher name"
                ref={publisher}
              />
            </div>
            <div className="group">
              <label htmlFor="pages">No. of Pages:</label>
              <input
                id="pages"
                type="number"
                className="input"
                placeholder="Please enter the no. of pages"
                min="1"
                ref={pages}
              />
            </div>
            <div className="group">
              <label htmlFor="imgURL">Image URL:</label>
              <input
                id="imgURL"
                type="text"
                className="input"
                placeholder="Please enter the URL of cover page image"
                ref={img}
              />
            </div>
            <div className="group-btn">
              <button className="button mt-5" type="submit">Add Book</button>
            </div>
          </form>
        </div>
      </div>
      <Upload />
      <ToastContainer />
    </div>
  );
};

export default AddBooks;
