import React from "react";
import "./faq.css";
import helpImage from "../assets/help.png";

const FaqHelp = () => {
  return (
    <div className="faq-help">
      <div className="faq-help-header">
        <h1 className="faq-help-title">Book Listing App Help Center</h1>
        <img src={helpImage} alt="Help" className="faq-help-image" />
      </div>
      <div className="faq-help-description">
        <h2 className="faq-help-description-title">
          What can we help you with?
        </h2>
        <p className="faq-help-description-text">
          If you have any questions or need assistance, our support team is here
          to help. Select a category below to find answers to common queries or
          contact us directly for personalized assistance.
        </p>
      </div>
      <div className="faq-section">
        <h2 className="faq-section-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4 className="faq-question">
            <b>Q: How can one develop a habit of reading regularly?</b>
          </h4>
          <p className="faq-answer">
            <b>A:</b> One can start by setting aside dedicated time for reading
            each day. Creating a comfortable reading environment and choosing
            books that genuinely interest you can also help.
          </p>
        </div>
        <div className="faq-item">
          <h4 className="faq-question">
            <b>
              Q: What are some common reasons why people abandon books midway?
            </b>
          </h4>
          <p className="faq-answer">
            <b>A:</b> Some reasons include a lack of interest in the content or
            finding it difficult to connect with the writing style. However,
            there are many other books to choose from.
          </p>
        </div>
      </div>
      <div className="help-section">
        <h2 className="help-section-title">Need More Help?</h2>
        <p className="help-description">
          If you have any other questions or need further assistance, please
          don't hesitate to contact our customer support team. We are here to
          help you!
        </p>
        <div className="help-contact">
          <p className="help-contact-text">Contact us:</p>
          <ul className="help-contact-list">
            <li>Email: support@example.com</li>
            <li>Phone: 123-456-7890</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqHelp;
