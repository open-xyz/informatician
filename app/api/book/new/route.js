import { connectedToDB } from "@/utils/database";
import Book from "@/model/Book"

export const POST = async(req)=>{
    const {bookName,
      authorName,
      publisher,
      pages,
      img,
      bookpdf,
      category} = await req.json();

    try {
        await connectedToDB();
        const newBook = new Book({
            bookName,
            authorName,
            publisher,
            pages,
            img,
            bookpdf,
            category
        })

        await newBook.save();

        return new Response(JSON.stringify(newBook),{status:201})

    } catch (error) {
       return new Response('Failed to create a new book',{status:500})
    }
}