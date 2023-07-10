import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:" Cultivate your love for nature and create your own green oasis with gardening books that offer practical advice, design inspiration, and expert tips. From urban gardening to landscape design, discover the joy of nurturing plants, cultivating beautiful outdoor spaces, and reconnecting with the natural world. Whether you're a seasoned gardener or a beginner, these books will guide you on a journey of growth, beauty, and tranquility.",
  subtitle:"Surround yourself with love",
  heading: "Home & Garden",
  image:"https://github.com/rohansx/informatician/assets/98682478/f5934c73-3d7e-4097-8c2e-c6c818702fd3",
};

function Garden(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <Container className="card-container">
    <Card data={data} theme={props.theme}/>
      <Row className="mt-5">
        <Col>
          <p className="subtitle">
            The most lovable and decorating Home & Garden titles this month.
          </p>
          <BkCards bkhead="Trending titles"></BkCards>
          <BkCards bkhead="Must-Read Biographies of Great Leaders"></BkCards>
          {showMore && <BkCards bkhead="Everything About Biography & Memoir"></BkCards>}
          {!showMore && (
            <button className="show-more-button" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Garden;
