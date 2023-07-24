import React, { useState } from "react";
import "./faq.css";
import helpImage from "../../assets/mainPages/help.webp";
import faqData from "./faqData";

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion-item ${expanded ? "expanded" : ""}`}>
      <button
        onClick={toggleAccordion}
        aria-expanded={expanded ? "true" : "false"}
      >
        <span className="accordion-title">{title}</span>
        <span className="icon" aria-hidden="true"></span>
      </button>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

const FaqHelp = () => {
  return (
    <div className="faq-help">
      <h1 className="faq-help-title">Informatician Help Center</h1>
      <div className="faq-help-header">
        <div>
          <img
            loading="lazy"
            src={helpImage}
            alt="a person wearing a headset"
            className="faq-help-image"
          />
          <div className="help-section">
            <h2 className="help-section-title">Need More Help?</h2>
            <p className="help-description">
              If you have any other questions or need further assistance, Please
              don't hesitate to <a href="./contact">contact </a> our customer
              support team. We are here to help you!
            </p>
          </div>
        </div>
        <div>
          <div className="faqcontainer">
            <h2 className="faqh2">Frequently Asked Questions</h2>
            <div className="accordion">
              {faqData.map((faq, index) => {
                return (
                  <AccordionItem
                    key={index}
                    title={faq.title}
                    content={faq.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHelp;
