import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:"Explore the diverse world of careers, from the trials and triumphs of industry leaders to practical guides on finding your true passion and navigating the ever-changing professional landscape. Discover inspiring stories of individuals who have carved their own paths to success and gain valuable insights to help you make informed decisions and achieve your career goals. Discover the stories of trailblazers who have overcome obstacles and redefined success, while gaining practical advice on networking, personal branding, and work-life balance.",
  subtitle:"Dive into the world of imagination",
  heading: "Contemporary Fictions",
  image:"https://github.com/rohansx/informatician/assets/98682478/4785442a-0eb3-472a-8185-f6a23c8cf85d",
};

function Contemporary(props) {
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
            The most handsomely beautiful Contemporary Fiction titles this month.
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

export default Contemporary;
