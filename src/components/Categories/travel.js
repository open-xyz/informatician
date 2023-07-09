import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:"Embark on a literary voyage and explore the world's wonders through travel books that transport you to captivating destinations. Immerse yourself in vivid descriptions of cultures, landscapes, and experiences, allowing your imagination to wander. Whether you're planning your next adventure or simply seeking armchair exploration, these books offer travel insights, local perspectives, and inspiring narratives that will satisfy your wanderlust and awaken the adventurer within you.",
  subtitle:"The world is too small to travel",
  heading: "Travel",
  image:"https://github.com/rohansx/informatician/assets/98682478/818122ef-71b8-479e-9c30-62f604760c3c",
};

function Travel(props) {
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
            The most traveled and enjoyed Travel titles this month.
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

export default Travel;
