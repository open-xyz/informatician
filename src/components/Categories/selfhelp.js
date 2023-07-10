import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:" Empower yourself with self-help literature that provides guidance, inspiration, and practical tools for personal growth and well-being. From managing stress and enhancing relationships to fostering resilience and achieving success, self-help books offer actionable strategies to navigate life's challenges and cultivate a fulfilling and balanced existence. Discover inner strength, unlock your potential, and embark on a transformative journey of self-discovery with these empowering reads.",
  subtitle:"Help your soul to grow your sanity",
  heading: "Self-Improvement",
  image:"https://github.com/rohansx/informatician/assets/98682478/4f2e1c58-63d6-4a41-b6bb-7ff7440b08f8",
};

function SelfHelp(props) {
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
            The most stress relieving Self-Improvement titles this month.
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

export default SelfHelp;
