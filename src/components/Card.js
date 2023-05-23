import React from 'react'

import "./Card.css"
const Card = (props) => {
  return (
    <div className="card">
    <div className="eventcard" style={{ width: "100%" }}>
      <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" className="card-img-top cardimage" alt="..." />
      <div className="card-body">
        <div className="card-text">
          <p className="cardhead">{props.name}</p>
          <p className="carddate">{props.date}</p>
          <p className="cardlocation">Location</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card



