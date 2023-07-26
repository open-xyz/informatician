import React from "react";
import "./AddBooks.css";
import Upload from "./Upload";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validate from "../../utils/validation";
import { backendURL } from "../../utils/impURLs";
import { useNavigate } from "react-router-dom";

const AddBooks = (props) => {
  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    publisher: "",
    pages: "",
    img: "",
    category: "Art",
  });

  const [bookPdf, setBookPdf] = useState(null);

  const [error, setError] = useState({
    bookName: true,
    authorName: true,
    publisher: true,
    pages: true,
  });

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => {
      return { ...prev, [name]: value };
    });
    if (name !== "category" && name !== "img") {
      const message = validate[name](value);
      setError((prev) => {
        return { ...prev, ...message };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let submitable = true;
    Object.values(error).forEach((e) => {
      if (e !== false) {
        submitable = false;
        return;
      }
    });

    const bookInput = document.getElementById("upload-btn");
    if (!bookInput.files.length > 0) {
      toast.error("Please upload book.");
      return;
    }

    if (submitable) {
      try {
        toast.loading();
        // Add Book data
        const res = await axios.post(`${backendURL}/api/book/add`, book);
        localStorage.setItem("bookId", res.data);
        const id = localStorage.getItem("bookId");

        // Upload book pdf
        const formData = new FormData();
        formData.append("file", bookPdf);
        await axios.post(`${backendURL}/api/upload`, formData);

        await axios.put(`${backendURL}/api/book/` + id, {
          bookpdf: bookPdf.name,
        });

        toast.success("Book added Successfully!!");
        navigateTo("/success");
        localStorage.clear();
      } catch (err) {
        toast.dismiss();
        toast.error(err.response.data.message);
        if (err.response.data.type === "jwt") navigateTo("/login");
        console.log(err);
      }
    } else {
      console.log("Fill all fields with valid data");
    }
  };

  const categories = [
    "Art",
    "Biography",
    "Business",
    "Children's",
    "Classics",
    "Christian",
    "Comics",
    "Cookbooks",
    "Ebooks",
    "Fantasy",
    "Fiction",
    "Novel",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Non-Fiction",
    "Poetry",
    "Psychology",
    "Prejudice",
    "Romance",
    "Science",
    "Thriller",
    "Universe",
  ];

  return (
    <div>
      <div className="addbook_main">
        <h1
          className="form-title"
          style={{
            color: props.theme === "dark" ? "white" : "black",
          }}
        >
          Add Books
        </h1>
        <form
          className="Boxx"
          onSubmit={handleSubmit}
          style={{
            color: props.theme === "dark" ? "white" : "black",
            backgroundColor: props.theme === "dark" ? "black" : "white",
          }}
        >
          <div className="addBooks-container">
            <div className="add-books text-white">
              <input
                className="Inputt"
                name="bookName"
                type="text"
                placeholder="Book Name"
                value={book.bookName}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.bookName && error.bookNameError && (
                <p className="error">{error.bookNameError}</p>
              )}
              <input
                className="Inputt"
                type="text"
                name="authorName"
                placeholder="Author Name"
                value={book.authorName}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.authorName && error.authorNameError && (
                <p className="error">{error.authorNameError}</p>
              )}
              <input
                className="Inputt"
                type="text"
                name="publisher"
                placeholder="Publisher"
                value={book.publisher}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.publisher && error.publisherError && (
                <p className="error">{error.publisherError}</p>
              )}
              <input
                className="Inputt"
                type="number"
                name="pages"
                placeholder="Pages"
                value={book.pages}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              {error.pages && error.pagesError && (
                <p className="error">{error.pagesError}</p>
              )}
              <input
                className="Inputt"
                type="text"
                name="img"
                placeholder="Img Url"
                value={book.img}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              />
              <select
                className="Inputt"
                name="category"
                value={book.category}
                style={{
                  color: props.theme === "dark" ? "white" : "black",
                  backgroundColor: props.theme === "dark" ? "black" : "white",
                }}
                onChange={handleChange}
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <Upload
              formData={error}
              bookPdf={bookPdf}
              setBookPdf={setBookPdf}
            />
          </div>
          <button className="Buttonn" type="submit">
            Submit Book
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBooks;
