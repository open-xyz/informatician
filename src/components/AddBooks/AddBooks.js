import React from 'react'
import "./AddBooks.css"
import BookImg from "../../assets/book2.jpg"
const AddBooks = () => {
    return (
        <div className="addBooks-container">

            <div className='add-books text-white' style={{}}>
                <h1 className='form-title' style={{color: "black"}}>Add Books</h1>
                <div className="group">
                    
                    <input id="book_name" type="text" className="input" placeholder='Book Name'/>
                </div>
                <div className="group">
                    
                    <input id="author_name" type="text" className="input" placeholder='Author Name'/>
                </div>
                <div className="group">
                    
                    <input id="publisher" type="text" className="input" placeholder='Publisher'/>
                </div>
                <div className="group">
                    
                    <input id="pages" type="number" className="input" placeholder='Pages'/>
                </div>
                <div className="group">
                    <input id="img_url" type="text" className="input" placeholder='Img_url'/>
                </div>
                <div className="group-btn">
                    <input type="submit" className="button" value="Add Books" />
                </div>
            </div>

        </div>
    )
}

export default AddBooks
