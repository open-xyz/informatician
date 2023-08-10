'use client'
import Upload from "@/components/Upload/Upload";
import { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast"
import { validate, AuthErrorMessage } from "@/utils/validation"
import { backendURL } from "@/utils/Constants";
import { FaTimes } from "react-icons/fa";

const AddBooks = () => {
    const id = useParams();
    const navigate = useRouter();
    const [bookPdf, setBookPdf] = useState(null)
    const [previewImg, setPreviewImg] = useState(null)
    const isLogIn = true;

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
        if (name !== "category" && name !== "img") {
            const message = validate[name](value);
            setError((prev) => {
                return { ...prev, ...message };
            });
        }
    };

    const handleBookImage = (e)=>{
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = () => {
          setPreviewImg(reader.result);
        };
  
        reader.readAsDataURL(file);
      }
      setBook((prev)=>{
        return {...prev, img: file}
      })
    }

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

        if (submitable) {
            if (!bookPdf) { toast.error("Please upload book."); return }
            try {
                toast.loading();
                const res = await axios.post(`${backendURL}/api/book/add`, book);

                // Upload book pdf
                const formData = new FormData();
                formData.append("file", bookPdf);
                await axios.post(`${backendURL}/api/upload`, formData);

                await axios.put(`${backendURL}/api/book/` + id, {
                    bookpdf: bookPdf.name,
                });
                toast.dismiss();
                toast.success("Book added Successfully!!");
                navigate("/success");
                localStorage.clear();
            } catch (err) {
                toast.dismiss();
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

    const showImage = ()=>{
      document.getElementById("previewImage").classList.remove("hidden")
      document.getElementById("previewImage").classList.add("block")
    }

    const closeImage = ()=>{
      document.getElementById("previewImage").classList.remove("block")
      document.getElementById("previewImage").classList.add("hidden")
    }


    return !isLogIn ? (
      <ShowLogin />
    ) : (
      <div className="py-8">
          <div id="previewImage" className="hidden fixed w-[100vw] h-[100vh] top-[0] bg-[#000000b8] p-[12%]">
          <img src={previewImg} alt="Book Cover Image" className="m-auto w-[50vw] h-[60vh]"/>
            
              <FaTimes className="absolute z-1 right-8 text-white top-32 text-lg cursor-pointer" onClick={closeImage} />
            </div>
        <div className="flex gap-6 max-md:flex-col items-center justify-center mt-20 md:mx-20">
          <div className="mx-8 sm:mx-8 sm:w-3/4 md:w-1/2 lg:w-[70%]  rounded-lg shadow-[0_10px_15px_-3px_rgb(59,130,246,0.3)] border">
            <h1 className="text-4xl font-bold text-center mt-8 mb-4">
              Add Books
            </h1>
            <form
              className="px-8 py-6 space-y-6 flex flex-col"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="bookName">Enter the Book Name: </label>
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
                {error.bookName && error.bookNameError && (
                  <AuthErrorMessage message={error.bookNameError} />
                )}
              </div>
              <div>
                <label htmlFor="authorName">Enter the Author Name: </label>
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
                {error.authorName && error.authorNameError && (
                  <AuthErrorMessage message={error.authorNameError} />
                )}
              </div>

              <div>
                <label htmlFor="publisher">Enter the Publisher Name: </label>
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
                {error.publisher && error.publisherError && (
                  <AuthErrorMessage message={error.publisherError} />
                )}
              </div>

              <div>
                <label htmlFor="pages">Enter the Number of Pages: </label>
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
                {error.pages && error.pagesError && (
                  <AuthErrorMessage message={error.pagesError} />
                )}
              </div>
              <div>
                <label htmlFor="category">Select Book Category</label>
                <select
                  id="category"
                  className="w-[100%] border border-gray-300 dark:border-gray-700 px-4 py-2 rounded"
                  value={book.category}
                  onChange={handleChange}
                  name="category"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-around w-100% gap-5 items-stretch content-center flex-col lg:flex-row">
              <div className="py-5 px-10 w-[95%] lg:w-[50%] m-auto flex flex-col items-center justify-center rounded-lg shadow-[0_10px_15px_-3px_rgb(59,130,246,0.3)] border">
                <h2 className="text-xl font-bold mb-4 text-center">Upload Book's Cover Image</h2>
                <div className="border-2 rounded-lg my-5 p-5 sm:p-10 flex flex-col items-center justify-center">
                  <input
                    type="file"
                    name="img"
                    id="img"
                    accept=".jpg, .jpeg, .png, .webp"
                    className="hidden"
                    onChange={handleBookImage}
                    required
                  />
                  <label
                    htmlFor="img"
                    className="text-center mb-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Select Image To Upload
                  </label>
                  {book.img && (
                    <div>
                    <p className="flex justify-center items-center rounded-md gap-5 bg-[#eff6ff] p-2 m-1">
                      {book.img.name.slice(0, 21)}
                      {book.img.name.length > 20 ? "..." : null}
                      <FaTimes
                        onClick={() => {
                          setBook((prev)=>{
                            return {...prev, img: null}
                        });
                          setPreviewImg(null);
                        }}
                        className="cursor-pointer"
                      />
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-[100%] mt-[10px]"  type="button" onClick={showImage}>Preview Image</button>
                    </div>
                  )}
                </div>

                <p className="mt-0 text-center">
                  Supported file types: .jpg, .jpeg, .png, and .webp
                </p>
              </div>
              <Upload bookPdf={bookPdf} setBookPdf={setBookPdf} />
              </div>
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
        </div>
      </div>
    );
};

const ShowLogin = () => {
    return (
        <div className="show-login p-10 flex flex-col items-center justify-center rounded-lg shadow-lg border">
            <h2 className="text-xl font-bold mb-4">Please first login to upload a book</h2>
        </div>
    )
}

export default AddBooks;
