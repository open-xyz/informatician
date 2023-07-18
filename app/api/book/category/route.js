import Book from "@/model/Book"
import { connectedToDB } from "@/utils/database";

export const GET = async (req, {params}) =>{

    await connectedToDB();

    try {
        const category = params.category;
        const books = await Book.find({ category: category });
        console.log(books)
        return new Response(JSON.stringify(books),{status:200})
       
    } catch (error) {
        new Response("Failed to fetch category data",{status:500})
    }
}