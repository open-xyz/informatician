import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API;

export const searchBooks = async (bookName)=>{
  const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`;
  try{
    const response = await axios(baseURL);
    const result = response.data;
    return [...result?.items];
  }catch(err){
    return err;
  }
}