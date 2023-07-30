'use client'
import Upload from "@/components/Upload/Upload";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {validate, AuthErrorMessage} from "../../utils/validation"

const AddBooks = () => {

  const [book, setBook] = useState({
    bookName: "",
    authorName: "",
    publisher: "",
    pages: "",
    img: "",
    category: "Art",
  })

  const [error, setError] = useState({
    bookName: true,
    authorName: true,
    publisher: true,
    pages: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => {
      return { ...prev, [name]: value };
    });
    if(name !== "category" && name!== "img"){
      const message = validate[name](value);
      setError((prev) => {
        return { ...prev, ...message };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submitable = true;
    console.log(error)
    Object.values(error).forEach((e) => {
      if (e !== false) {
        submitable = false;
        return;
      }
    });

    const bookPDF = document.getElementById("upload-btn");
    if(!bookPDF.files.length > 0) {toast.error("Please upload book."); return}
    
    if (submitable) {
      try {
        const res = await axios.post(
          "https://informaticonserver.onrender.com/api/book/add",
          book
        );
        toast.success("Book details added!!Upload the book.");
        localStorage.setItem("bookId", res.data);
      } catch (err) {
        toast.error(err.message);
        console.log(err.message);
      }
    } else {
      toast.error("Fill all fields with valid data");
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
    <div className="py-8">
      <div className="flex gap-6 max-md:flex-col items-center justify-center mt-20 md:mx-20">
        <div className="mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3  rounded-lg shadow-lg border">
          <h1 className="text-4xl font-bold text-center mt-8 mb-4">
            Add Books
          </h1>
          <form className="px-8 py-6 space-y-6 flex flex-col" onSubmit={handleSubmit}>
          <div>
            <label for="bookName">Enter the Book Name: </label>
          <input
              className="w-[100%] mb-1 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="bookName"
              name="bookName"
              value={book.bookName}
              onChange={handleChange}
              placeholder="Book Name"
              aria-label="Book Name"
              required
            />
             {error.bookName && error.bookNameError && <AuthErrorMessage message={error.bookNameError}/>}
          </div>
          <div>
          <label for="authorName">Enter the Author Name: </label>
            <input
              className="w-[100%] border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="authorName"
              placeholder="Author Name"
              name="authorName"
              value={book.authorName}
              onChange={handleChange}
              aria-label="Author Name"
              required
            />
            {error.authorName && error.authorNameError && <AuthErrorMessage message={error.authorNameError}/>}
           </div>
           
           <div>
           <label for="publisher">Enter the Publisher Name: </label>
            <input
              className="w-[100%] border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="publisher"
              placeholder="Publisher"
              name="publisher"
              value={book.publisher}
              onChange={handleChange}
              aria-label="Publisher"
              required
            />
             {error.publisher && error.publisherError && <AuthErrorMessage message={error.publisherError}/>}
           </div>
           
           <div>
           <label for="pages">Enter the Number of Pages: </label>
            <input
              className="w-[100%] border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="number"
              id="pages"
              min="0"
              placeholder="Pages"
              value={book.pages}
              name="pages"
              onChange={handleChange}
              aria-label="Number of Pages"
              required
            />
              {error.pages && error.pagesError && <AuthErrorMessage message={error.pagesError}/>}
              </div>
          <div>
          <label for="img">Enter the Book's Cover Image URL: </label>
            <input
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="img"
              placeholder="Img Url"
              name="img"
              value={book.img}
              onChange={handleChange}
              aria-label="Image URL"
              required
            />
          </div>
            <select className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded" value={book.category} onChange={handleChange} name="category" >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <br />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
              role="button"
              aria-label="Add Book"
            >
              Add Book
            </button>
          </form>
        </div>
        <Upload error={error}/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddBooks;
