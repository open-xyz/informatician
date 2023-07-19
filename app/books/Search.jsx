'use client'
import { useState } from "react";
import Image from "next/image";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const result = await searchBooks(bookName);
      setBooks(result);
    } catch (err) {
      console.log(err);
    }
  }

  function toggleCategories() {
    setShowCategories((prevShowCategories) => !prevShowCategories);
  }

  const categories = [
    ["Art", "Biography", "Business", "Children's", "Classics", "Christian"],
    ["Comics", "Cookbooks", "Ebooks", "Fantasy", "Fiction", "Novel"],
    ["History", "Horror", "Music", "Mystery", "Non-Fiction", "Poetry"],
    ["Psychology", "Prejudice", "Romance", "Science", "Thriller", "Universe"],
  ];

  return (
    <>
      <form className="max-w-xl w-full border-2 rounded-full">
        <div className="relative">
          <input
            id="default-search"
            className="w-full px-5 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setBookName(event.target.value)}
            placeholder="Title / Author / ISBN"
            required
          />

          <button
            type="submit"
            id="search-button-2"
            onClick={handleClick}
            className="absolute p-1 top-1/2 right-4 transform -translate-y-1/2"
          >
            <div>
              <Image
                loading="lazy"
                width="32"
                height="32"
                src="https://img.icons8.com/ios/100/search--v1.png"
                alt="Icon of a magnifying glass for search functionality"
              />
            </div>
          </button>
        </div>
      </form>

      <div
        className={`cursor-pointer text-blue-600 my-2 font-medium transition-all duration-300 ${showCategories ? "max-h-96" : "max-h-0"
          }`}
        onClick={toggleCategories}
      >
        {showCategories ? "Hide Categories" : "Select Categories"}
      </div>

      {showCategories && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index}>
              {category.map((link, linkIndex) => (
                <a href="#" className="block p-1.5 no-underline mx-14 font-medium text-emerald-700" key={linkIndex}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
