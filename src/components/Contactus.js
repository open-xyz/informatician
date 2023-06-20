import React, { useState, useEffect } from 'react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';
import contactImage from '../assets/contact-us.png';
import './Contactus.css';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

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
            <h2 className="contact-title" data-aos="fade-down" data-aos-duration="500">Contact Us</h2>
            <p className="contact-description" data-aos="fade-down" data-aos-duration="500">
              We'd love to hear from you! Reach out to us for any inquiries, feedback, or collaboration opportunities.
            </p>
            <form className="contact-form" onSubmit={handleResponse}>
              <div className="form-field">
                <label htmlFor="name" className='text-left block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2' data-aos="fade-left" data-aos-duration="500">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="form-input focus:ring-blue-600 focus:border-blue-600"
                  required
                  onChange={(e) => setName(e.target.value)}
                  data-aos="fade-left" data-aos-duration="500"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 text-left' data-aos="fade-left" data-aos-duration="500">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="form-input focus:ring-blue-600 focus:border-blue-600"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="fade-left" data-aos-duration="500"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message" className='block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2 text-left' data-aos="fade-left" data-aos-duration="500">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="form-input message-input focus:ring-blue-600 focus:border-blue-600"
                  required
                  onChange={(e) => setMsg(e.target.value)}
                  data-aos="fade-left" data-aos-duration="500"
                />
              </div>
              <button data-aos="fade-up" data-aos-duration="500" type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-image" data-aos="fade-right" data-aos-duration="500">
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
