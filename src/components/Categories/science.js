import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:"Embark on a fascinating journey through the realms of science, where discoveries, theories, and wonders abound. From astronomy to biology, physics to psychology, science books illuminate the mysteries of the natural world and the human experience. Engage with groundbreaking research, explore scientific concepts, and marvel at the wonders of our universe. These books inspire curiosity, ignite intellectual exploration, and deepen our understanding of the world around us. Calculate the numbers with Mathematics.",
  subtitle:"Learn the calculations of nature",
  heading: "Science & Mathematics",
  image:"https://github.com/rohansx/informatician/assets/98682478/a7a35432-5149-4873-88ea-fec2a254ca18",
};

function Science(props) {
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
            The most astounding and calculative Science & Mathematics titles this month.
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

export default Science;
