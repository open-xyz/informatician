import axios from "axios";

const API_KEY = "AIzaSyB3sYLJcjF78HW8zc10yTkW2dHM-uLRtOs";


export const searchBooks = async (bookName)=>{


  const encodedBookName = encodeURIComponent(bookName);
const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${encodedBookName}&key=${API_KEY}&maxResults=40`;
  

try{
    const response = await axios.get(baseURL);
    console.log(API_KEY)
    const result = response.data.items;
    return result || [];
  }catch(err){
    throw new Error("Error searching for books");
  }
}