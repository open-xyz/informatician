import React, { useState } from "react";
import "./faq.css";
import helpImage from "../../assets/mainPages/help.webp";

const AccordionItem = ({ title, content}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion-item ${expanded ? 'expanded' : ''}`}
    >
      <button
        onClick={toggleAccordion}
        aria-expanded={expanded ? 'true' : 'false'}
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
        <img loading='lazy' src={helpImage} alt="a person wearing a headset" className="faq-help-image" />
        <div className="help-section">
        <h2 className="help-section-title">Need More Help?</h2>
        <p className="help-description">
          If you have any other questions or need further assistance, Please
          don't hesitate to <a href="./contact">contact </a> our customer support team. We are here to
          help you!
        </p>
       
      </div>
        </div>
        <div>
        <div className="faqcontainer">
        <h2 className="faqh2">Frequently Asked Questions</h2>
        <div className="accordion">
          <AccordionItem
            title="Q: How can one develop a habit of reading regularly?"
            content="A: One can start by setting aside dedicated time for reading
            each day. Creating a comfortable reading environment and choosing
            books that genuinely interest you can also help."
          />
          <AccordionItem
            title=" Q: What are some common reasons why people abandon books midway?"
            content=" A: Some reasons include a lack of interest in the content or
            finding it difficult to connect with the writing style. However,
            there are many other books to choose from."
          />
           <AccordionItem
            title=" Q:What are the benefits of reading regularly?"
            content=" A: Reading regularly has numerous benefits : improved cognitive function, increased knowledge, and enhanced focus & concentration.
            It reduces stress and promotes relaxation by immersing you in a different world or story.
            Reading improves ones vocabulary, language skills, and writing abilities, making one an effective communicator."
          />
           <AccordionItem
            title=" Q:What are some strategies for staying motivated to read?"
            content=" A: To stay motivated to read, it can be helpful to set reading goals and establish a regular reading routine.Additionally, having a consistent reading routine helps to make reading a habit and ensures one to set aside dedicated time for it."
          />
        </div>
      </div>
        </div>
     

      </div>


      {/* <div className="faqcontainer">
        <h2 className="faqh2">Frequently Asked Questions</h2>
        <div className="accordion">
          <AccordionItem
            title="Q: How can one develop a habit of reading regularly?"
            content="A: One can start by setting aside dedicated time for reading
            each day. Creating a comfortable reading environment and choosing
            books that genuinely interest you can also help."
          />
          <AccordionItem
            title=" Q: What are some common reasons why people abandon books midway?"
            content=" A: Some reasons include a lack of interest in the content or
            finding it difficult to connect with the writing style. However,
            there are many other books to choose from."
          />
           <AccordionItem
            title=" Q:What are the benefits of reading regularly?"
            content=" A: Reading regularly has numerous benefits : improved cognitive function, increased knowledge, and enhanced focus & concentration.
            It reduces stress and promotes relaxation by immersing you in a different world or story.
            Reading improves ones vocabulary, language skills, and writing abilities, making one an effective communicator."
          />
           <AccordionItem
            title=" Q:What are some strategies for staying motivated to read?"
            content=" A: To stay motivated to read, it can be helpful to set reading goals and establish a regular reading routine.Additionally, having a consistent reading routine helps to make reading a habit and ensures one to set aside dedicated time for it."
          />
        </div>
      </div> */}



      {/* <div className="help-section">
        <h2 className="help-section-title">Need More Help?</h2>
        <p className="help-description">
          If you have any other questions or need further assistance, Please
          don't hesitate to <a href="./contact">contact </a> our customer support team. We are here to
          help you!
        </p>
       
      </div> */}
    </div>
  );
};

export default FaqHelp;
