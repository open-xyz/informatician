'use client'
import Upload from "@/components/Upload/Upload";
import { useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"

const AddBooks = () => {
  const bookName = useRef();
  const authorName = useRef();
  const publisher = useRef();
  const pages = useRef();
  const img = useRef();
  const category = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const books = {
      bookName: bookName.current.value,
      authorName: authorName.current.value,
      publisher: publisher.current.value,
      pages: pages.current.value,
      img: img.current.value,
      category: category.current.value,
    };

    try {
      const res = await axios.post(
        "https://informaticonserver.onrender.com/api/book/add",
        books
      );
      toast.success("Book details added!!Upload the book.");
      localStorage.setItem("bookId", res.data);
    } catch (err) {
      toast.error("Fill all the details!");
      console.log(err.message);
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
            <label for="book-name">Enter the Book Name: </label>
            <input
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="book-name"
              name="book-name" 
              placeholder="Book Name"
              ref={bookName}
              aria-label="Book Name"
            />
            <label for="author-name">Enter the Author Name: </label>
            <input
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="author-name"
              name="author-name" 
              placeholder="Author Name"
              ref={authorName}
              aria-label="Author Name"
            />
            <label for="publisher-name">Enter the Publisher Name: </label>
            <input
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="publisher-name"
              name="publisher-name" 
              placeholder="Publisher"
              ref={publisher}
              aria-label="Publisher"
            />
            <label for="no-of-pages">Enter the Number of Pages: </label>
            <input
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="number"
              id="no-of-pages"
              name="no-of-pages" 
              min="0"
              placeholder="Pages"
              ref={pages}
              aria-label="Number of Pages"
            />
            <label for="book-image-url">Enter the Book's Cover Image URL: </label>
            <input
              className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
              type="text"
              id="book-image-url"
              name="book-image-url" 
              placeholder="Img Url"
              ref={img}
              aria-label="Image URL"
            />

            <select className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded" ref={category}>
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
        <Upload />
      </div>
    </div>
  );
};

export default AddBooks;
