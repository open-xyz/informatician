import React from "react";
import "./Contactus.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import contactImage from "../assets/contact-us.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-image">
            <img src={contactImage} alt="Contact" className="contact-image" />
          </div>
          <div className="contact-text">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or collaboration opportunities.
            </p>
            <form className="contact-form">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <textarea
                placeholder="Message"
                className="form-input message-input"
              ></textarea>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="contact-social-icons">
              <h4>Connect with us:</h4>
              <div className="social-icons">
                <a href="#" className="social-icon"><AiFillFacebook /></a>
                <a href="#" className="social-icon"><AiFillTwitterSquare /></a>
                <a href="#" className="social-icon"><AiFillInstagram /></a>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Contact;
