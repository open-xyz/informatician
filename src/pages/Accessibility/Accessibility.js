import React, { useState } from "react";
import "./Accessibility.css";

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`access-section ${expanded ? "expanded" : ""}`}>
      <button onClick={toggleAccordion} aria-expanded={expanded ? "true" : "false"}>
        <h3 className="access-section-title">{title}</h3>
        <span className={`icon ${expanded ? "expanded" : ""}`} aria-hidden="true">
          +
        </span>
      </button>
      {expanded && (
        <div className="access-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
const AccessibilityPage = () => {
  return (
    <div className="access">
      <div className="access-container">
        <h2 className="access-title">Accessibility Statement</h2>

        <AccordionItem
          title="Commitment to Accessibility"
          content="At Informatician, we are committed to ensuring accessibility for all visitors to our website. We strive to make our website user-friendly and accessible to individuals with disabilities, in compliance with applicable accessibility standards and guidelines."
        />

        <AccordionItem
          title="Inclusive User Experience"
          content="We aim to provide a positive and inclusive experience for all users, including those with visual, auditory, motor, and cognitive impairments. Our goal is to remove barriers and provide equal access to information and functionality on our website."
        />

        <AccordionItem
          title="Continuous Improvement"
          content="We continuously work towards improving the accessibility of our website and implementing best practices. We value feedback from our users and welcome any suggestions or issues related to accessibility."
        />

        <AccordionItem
          title="Dedication to Accessibility"
          content="We are dedicated to providing an accessible online environment for everyone and appreciate your support in this endeavor. Our commitment to accessibility is an ongoing effort, and we continuously strive to enhance the usability and inclusivity of our website based on user feedback and evolving accessibility standards."
        />

        <AccordionItem
          title="Third-Party Content and Integration"
          content="Please note that while we make every effort to ensure accessibility, some third-party content or features integrated into our website may be beyond our immediate control. However, we strive to collaborate with accessible third-party providers to ensure a seamless and inclusive user experience."
        />

        <AccordionItem
          title="Feedback and Contact"
          content="If you encounter any accessibility barriers or have any questions or suggestions regarding the accessibility of our website, please contact us using the information provided below. Your feedback is valuable in helping us enhance accessibility for all users."
        />

        <div className="access-section">
          <h3 className="access-section-title">Contact Us</h3>
          <div className="access-content">
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
              <a href="mailto:informaticianx@gmail.com" className="contact-email">
                informaticianx@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
