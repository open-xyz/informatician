import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBooks.css";
import Upload from "./Upload";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const AddBooks = () => {
  const navigate = useNavigate();

  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [pages, setPages] = useState('');
  
  const handlePages = (e) => {
    const numOfPages = e.target.value;
    if (numOfPages === '' || parseInt(numOfPages) >= 1)
      setPages(numOfPages);
  };

  const handleAddBooks = (e) => {
    e.preventDefault();

    if (!bookName || !author || !publisher || !pages) {
      alert("Please fill in all the fields.");
    } else {
      navigate('/success');
    }
  };

  return (
    <div>
      <div>
        <div className="quote text-center">Unleash the Power of Sharing:<br />Upload and Enrich Our Open Source Book Community!</div>
      </div>
      <div className="addBooks-container">
        <div className="add-books text-white">
          <h1 className="text-dark form-title">Share Book Information Here! <AutoStoriesOutlinedIcon className="ml-2" /></h1>
          <form>
            <div className="group">
              <label htmlFor="bookName">Book Name:</label>
              <input
                id="bookName"
                type="text"
                className="input"
                placeholder="Please enter the book name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="author">Author Name:</label>
              <input
                id="author"
                type="text"
                className="input"
                placeholder="Please enter the author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="publisher">Publisher Name:</label>
              <input
                id="publisher"
                type="text"
                className="input"
                placeholder="Please enter the publisher name"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
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
                value={pages}
                onChange={handlePages}
              />
            </div>
            <div className="group">
              <label htmlFor="imgURL">Image URL:</label>
              <input
                id="imgURL"
                type="text"
                className="input"
                placeholder="Please enter the URL of cover page image"
              />
            </div>
            <Upload />
            <div className="group-btn">
              <button className="button" type="submit" onClick={handleAddBooks}>
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
