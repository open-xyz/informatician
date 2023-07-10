import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:"Immerse yourself in the enigmatic world of mystery and suspense, where captivating narratives, intricate plots, and unexpected twists await. Unravel puzzling mysteries alongside clever detectives, explore the depths of human nature, and experience the thrill of uncovering hidden truths. From classic whodunits to psychological thrillers, mystery books will keep you guessing until the very end, providing an exhilarating escape into the realm of suspense.",
  subtitle:"Uncover the mystery of the secret",
  heading: "Mystery, Thriller & Crime",
  image:"https://github.com/rohansx/informatician/assets/98682478/ed9bf69a-15ec-4f37-b30a-55882a25616e",
};

function Mystery(props) {
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
            The most spellbounding Mystery, Thriller & Crime titles to victim this month.
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

export default Mystery;
