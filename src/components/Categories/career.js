import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:"Explore the diverse world of careers, from the trials and triumphs of industry leaders to practical guides on finding your true passion and navigating the ever-changing professional landscape. Discover inspiring stories of individuals who have carved their own paths to success and gain valuable insights to help you make informed decisions and achieve your career goals. Discover the stories of trailblazers who have overcome obstacles and redefined success, while gaining practical advice on networking, personal branding, and work-life balance.",
  subtitle:"Get inpiration to a successful career",
  heading: "Career & Growth",
  image:"https://github.com/rohansx/informatician/assets/98682478/ce9fcd87-a8ce-4588-bc42-9111190a188e",
};

function Career(props) {
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
            The most inspiring and successful Career & Growth titles this month.
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

export default Career;
