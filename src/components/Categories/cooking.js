import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css";
import Card from "./component/Card.js";

const data = {
  description:" Embark on a culinary adventure with cookbooks that celebrate the art of gastronomy. Explore a wide array of flavors, techniques, and cultural cuisines, igniting your passion for cooking and tantalizing your taste buds. From comforting classics to innovative creations, these books provide step-by-step recipes, chef tips, and culinary inspiration to elevate your skills in the kitchen and create delicious meals to share with loved ones.",
  subtitle:"Enjoy the taste of the art of cooking",
  heading: "Cooking & Food",
  image:"https://github.com/rohansx/informatician/assets/98682478/bc7f9af8-82ad-40f5-a292-91317887880c",
};

function Cooking(props) {
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
            The most well cooked and tasty Cooking & Food titles this month.
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

export default Cooking;
