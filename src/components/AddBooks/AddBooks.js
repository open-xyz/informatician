import React from 'react'
import "./AddBooks.css"
import BookImg from "../../assets/book2.jpg"
const AddBooks = () => {
    return (
        <div className="container">

            <div className='add-books text-white' style={{
                background: `rgba(25, 25, 112, 0.2)
                url(${BookImg}) no-repeat center center`
            }}>
                <h1>Add Books</h1>
                <div className="group">
                    <label for="book_name" className="label">Book Name</label>
                    <input id="book_name" type="text" className="input" />
                </div>
                <div className="group">
                    <label for="author_name" className="label">Author Name</label>
                    <input id="author_name" type="text" className="input" />
                </div>
                <div className="group">
                    <label for="publisher" className="label">Publisher</label>
                    <input id="publisher" type="text" className="input" />
                </div>
                <div className="group">
                    <label for="pages" className="label">Pages</label>
                    <input id="pages" type="number" className="input" />
                </div>
                <div className="group">
                    <label for="img_url" className="label">Img_Url</label>
                    <input id="img_url" type="text" className="input" />
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Add Books" />
                </div>
            </div>

        </div>
    )
}

export default AddBooks
