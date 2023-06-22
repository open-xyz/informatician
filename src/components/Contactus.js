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
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');

  function validEmail(email)
  {
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if ( re.test(email) ) 
   return true;
   else
   return false;
  }

  const handleResponse = async (e) => {
    e.preventDefault();

    console.log("called");

    setsuccess('');
    
    if(name === '')
    { seterror("Enter your Name!");}

    else if(email === '')
    { seterror("Enter your email!");}
    else if(!validEmail(email))
    { seterror("Enter valid email!");}

    else if(msg === '')
    { seterror("Enter any message!");}

    else
    {
          var formData = {
            name: name,
            email: email,
            message: msg
          };
      
          await fetch('http://localhost:3000/sendMail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
      
          seterror("");
         setName("");
         setEmail("");
         setMsg("");
         setsuccess("Contact Request sent successfully!!");
        
    }
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

            {success && (
              <p className='text-green-600 text-[18px] font-18 text-left mb-3'>{success}</p>
            )}
           
            <form className="contact-form" onSubmit={handleResponse}>
              <div className="form-field">
                <label htmlFor="name" className='text-left block uppercase tracking-wide text-lg font-bold mb-2' data-aos="fade-left" data-aos-duration="500">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className={`form-input focus:ring-blue-600 focus:border-blue-600 ${error === 'Enter your Name!'?'inputField':''}`}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-aos="fade-left" data-aos-duration="500"
                />
                {
                  error === 'Enter your Name!' && (
                    <small className='text-red-600 text-left text-[16px]'>Enter your Name!</small>
                  ) 
                }
              </div>
              <div className="form-field">
                <label htmlFor="email" className='block uppercase tracking-wide text-lg font-bold mb-2 text-left' data-aos="fade-left" data-aos-duration="500">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`form-input focus:ring-blue-600 focus:border-blue-600 ${error === 'Enter your email!'?'inputField':''} ${error === 'Enter valid email!'?'inputField':''} `}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="fade-left" data-aos-duration="500"
                />
                  {
                  error === 'Enter your email!' && (
                    <small className='text-red-600 text-left text-[16px]'>Enter your email!</small>
                  ) 
                }
                {
                  error === 'Enter valid email!' && (
                    <small className='text-red-600 text-left text-[16px]'>Enter valid email!</small>
                  ) 
                }
              </div>
              <div className="form-field">
                <label htmlFor="message" className='block uppercase tracking-wide text-lg font-bold mb-2 text-left' data-aos="fade-left" data-aos-duration="500">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className={`form-input message-input focus:ring-blue-600 focus:border-blue-600 ${error === 'Enter any message!'?'inputField':''} `}
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  data-aos="fade-left" data-aos-duration="500"
                />
                {
                  error === 'Enter any message!' && (
                    <small className='text-red-600 text-left text-[16px]' >Enter any message!</small>
                  ) 
                }
              </div>
              <button data-aos="fade-up" data-aos-duration="500" type="submit" className="submit-btn" onClick={handleResponse}>
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
