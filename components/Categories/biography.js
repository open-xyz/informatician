import React, { useState } from "react";
import "./biography.css"; // Import the CSS file for styling
import { Container, Row, Col, Carousel } from "react-bootstrap";
import BkCards from "../Home/BkCards/BkCards";

function Biography(props) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <Container className="biography-container" style={{ marginTop: 80 }}>
      <div className="biography-header" style={{ backgroundColor: props.theme === 'dark' ? '#161313' : '#f8f8f8' }}>
        <h1 className="heading" style={{ color: props.theme === 'dark' ? 'white' : '#333' }} >Biography &amp; Memoir</h1>
        <p className="subtitle">
          Discover captivating life stories and memoirs
        </p>
        <p className={`mt-3 ${showMore ? "show-more-visible" : ""}`}>
          Discover captivating tales of individuals who have truly embraced life
          to its fullest. Immerse yourself in a diverse collection of books that
          delve into the lives of renowned icons, infamous figures, and
          fascinating personalities across art, sports, politics, and music.
          From the world's most celebrated names to lesser-known individuals
          with captivating stories and unique perspectives, Informatician offers
          an extensive selection that will captivate and enlighten you.
          Subscribe now to embark on a journey through the extraordinary lives
          that have shaped our world.
        </p>
      </div>
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
