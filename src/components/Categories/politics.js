import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:"Gain a deeper understanding of political systems, ideologies, and key figures that shape our world. Explore the complexities of governance, analyze historical events, and examine contemporary political landscapes through insightful books. From biographies of influential leaders to analyses of policy issues, these works offer diverse perspectives and engage readers in critical thinking about the dynamics of power, democracy, and the forces that shape societies.",
  subtitle:"Unravel the diplomacy of the mind",
  heading: "Politics",
  image:"https://github.com/rohansx/informatician/assets/98682478/ac4ea93d-4a03-4d0c-8663-7bf1db18cbbe",
};

function Politics(props) {
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
            The most informative and track-keeping Politics titles this month.
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

export default Politics;
