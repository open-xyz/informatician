import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API;


export const searchBooks = async (bookName)=>{


  const encodedBookName = encodeURIComponent(bookName);
const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${encodedBookName}&key=${API_KEY}&maxResults=40`;
  

try{
    const response = await axios.get(baseURL);
    const result = response.data.items;
    return result || [];
  }catch(err){
    throw new Error("Error searching for books");
  }
}