import React from 'react'
import "./Card.css"
const Card = ({ title, description, publisher, pages, imgLink }) => {
  return (
    <div id="container">
      <div className="product-details">
        <h1>{title}</h1>
        <ul>
          <li><strong>Pages: </strong>{pages}</li>
          <li><strong>Publisher: </strong>{publisher}</li>
        </ul>
      </div>


      <div className="product-image">

        <img src={imgLink?.thumbnail} alt={title} />

        <div className="info">
          <h2>The Description</h2>
          <ul>
            <li><p><strong>{description}</strong></p></li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Card



