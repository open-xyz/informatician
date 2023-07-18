import Book from "@/model/Book"
import { connectedToDB } from "@/utils/database";

export const GET = async(req)=>{
    
    try {
        await connectedToDB();

        const books = await Book.find();

        return new Response(JSON.stringify(books),{status:200})
        
    } catch (error) {
       new Response('Failed to load the all books',{status:500}) 
       console.log(error)
    }
}

