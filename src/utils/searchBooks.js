import axios from "axios";



async function fetchApiKeyFromServer() {
  try {
    const response = await fetch('https://informaticonserver.onrender.com/api/book/key'); // Replace with your server endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch API_KEY from the server');
    }
    const data = await response.json();
    return data.apiKey;
  } catch (error) {
    console.error(error);
    // Handle the error if needed
  }
}


export const searchBooks = async (bookName) => {

 
const API_KEY = await fetchApiKeyFromServer();
console.log(API_KEY);

  const encodedBookName = encodeURIComponent(bookName);
  const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${encodedBookName}&key=${API_KEY}&maxResults=40`;

  try {
    const response = await axios.get(baseURL);
    const result = response.data.items;
    console.log(result);
    return result || [];
  } catch (err) {
    throw new Error(`Error searching for books: ${err}`);
  }
}