import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";
import "./index.css"; // Import the CSS file for styling
import Card from "./component/Card";

const data = {
  description:"Discover captivating tales of individuals who have truly embraced life to its fullest. Immerse yourself in a diverse collection of books that delve into the lives of renowned icons, infamous figures, and fascinating personalities across art, sports, politics, and music. From the world's most celebrated names to lesser-known individuals with captivating stories and unique perspectives, Informatician offers an extensive selection that will captivate and enlighten you. Subscribe now to embark on a journey through the extraordinary lives that have shaped our world.",
  subtitle:"Discover captivating life stories and memoirs ",
  heading: "Biography & Memoir",
  image:"https://github.com/rohansx/informatician/assets/98682478/8238f844-e115-41cf-a135-e0cd388efc07",
};


function Biography(props) {
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
            The most talked-about and well-loved Biography & Memoir titles this month.
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

export default Biography;
