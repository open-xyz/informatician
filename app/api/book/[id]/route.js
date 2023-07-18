import Book from "@/model/Book"
import { connectedToDB } from "@/utils/database";


export const GET = async (req, {params}) =>{
    try {
       await connectedToDB();

       const book = await Book.findById(params.id);

       if(!book) return new Response('Book not found',{status:404})

       return new Response(JSON.stringify(book),{status:200})
        
    } catch (error) {
        new Response("Failed to fetch book data",{status:500})
    }
}

export const PATCH = async (req, {params})=>{
    const {bookName,
        authorName,
        publisher,
        pages,
        img,
        bookpdf,
        category} = await req.json()
    try {
        await connectedToDB();
      
        const existingBook = await Book.findById(params.id);

        if(!existingBook) return new Response("Book is not found", {status:404});

        existingBook.bookName = bookName;
        existingBook.authorName = authorName;
        existingBook.publisher = publisher;
        existingBook.pages = pages;
        existingBook.img = img;
        existingBook.bookpdf = bookpdf;
        existingBook.category = category;

        await existingBook.save();

      return new Response(JSON.stringify(existingBook),{status:200})
    } catch (error) {
       return new Response("Failed to updated the book",{status:500})
    }
}

export const DELETE = async (req, {params})=>{

    try {
        await connectedToDB();
        await Book.findByIdAndRemove(params.id);
        return new Response('Book Deleted successfully',{status:200})
    } catch (error) {
        return new Response("Failed to delete the book",{status:500})
    }
}
