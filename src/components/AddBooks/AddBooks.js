import React from "react";
import "./AddBooks.css";
import BookImg from "../../assets/book2.jpg";
import Upload from "./Upload";

const AddBooks = () => {
  return (
    <div>
      <div className="addBooks-container">
        <div className="add-books text-white">
          <h1 className="text-dark form-title">Add Books</h1>
          <div className="group">
            <input
              id="book_name"
              type="text"
              className="input"
              placeholder="Book Name"
            />
          </div>
          <div className="group">
            <input
              id="author_name"
              type="text"
              className="input"
              placeholder="Author Name"
            />
          </div>
          <div className="group">
            <input
              id="publisher"
              type="text"
              className="input"
              placeholder="Publisher"
            />
          </div>
          <div className="group">
            <input
              id="pages"
              type="number"
              className="input"
              placeholder="Pages"
            />
          </div>
          <div className="group">
            <input
              id="img_url"
              type="text"
              className="input"
              placeholder="Img_url"
            />
          </div>
          <div className="group-btn">
            <input type="submit" className="button" value="Add Books" />
          </div>
        </div>
      </div>
      <Upload />
    </div>
  );
};

export default AddBooks;
