import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../index.css"; 

function Card(props) {
    const {data} = props;
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
      <div className="biography-header" style={{ backgroundColor: props.theme === 'dark' ? '#242424' : '#f8f8f8' }}>
        <div className="w-8/12 h-full mr-10 box1">
        <h1 className="heading" style={{ color: props.theme === 'dark' ? 'white' : '#333' }} >{data.heading}</h1>
        <p className="subtitle">
          {data.subtitle}
        </p>
        <p className={`mt-3 ${showMore ? "show-more-visible" : ""}`}>
          {data.description}
        </p>
        </div>
        <div className="w-4/12 m-auto h-full box2">
            <img 
                src={data.image}
                className=" "
            />
        </div>
      </div>
  );
}

export default Card;
