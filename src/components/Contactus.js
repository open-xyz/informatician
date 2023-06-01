import React, { useState } from 'react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import contactImage from '../assets/contact-us.png';
import './Contactus.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleResponse = async (e) => {
    e.preventDefault();

    var formData = {
      name: name,
      email: email,
      message: msg
    };

    await fetch('http://localhost:5000/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    alert('Contact Request Sent Successfully');
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
              We'd love to hear from you! Reach out to us for any inquiries, feedback, or collaboration opportunities.
            </p>
            <form className="contact-form" onSubmit={handleResponse}>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="form-input"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="form-input"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="form-input message-input"
                  required
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-image">
            <img style={{ marginLeft: '10%' }} src={contactImage} alt="Contact" className="contact-image" />
          </div>
        </div>
        <div className="contact-social-icons">
          <h1 style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>Connect with us:</h1>
          <div className="social-icons">
            <Link to="/develop" className="social-icon-twitter">
              <FaTwitter />
            </Link>
            <Link to="https://github.com/rohansx/informatician" target='blank' className="social-icon-github">
              <FaGithub />
            </Link>
            <Link to="/develop" className="social-icon-discord">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
