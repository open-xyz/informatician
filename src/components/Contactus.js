import React, { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import contactImage from "../assets/contact-us.png";
import "./Contactus.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import validate from "../utils/validation";
import AuthErrorMessage from "./AuthError";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [success, setsuccess] = useState("");

  const handleResponse = async (e) => {
    e.preventDefault();
    console.log("called");
    setsuccess("");
    let submitable = true;
    Object.values(error).forEach(err=>{
      if(err !== false){
        submitable = false;
        return;
      }
    })

    if (submitable) {
      await fetch("http://localhost:3000/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setsuccess("Contact Request sent successfully!!");
    }else{
      alert("Please provide valid data in all fields")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prev) => {
      const errors = validate[name](value);
      return { ...prev, ...errors };
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div class="c_head">
        <h1
              className="contact-title"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Contact Us
            </h1>
            <p
              className="contact-description"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              We'd love to hear from you! Reach out to us for any inquiries,
              feedback, or collaboration opportunities.
            </p>
        </div>
     
        <div className="contact-content">
          <div className="contact-text">
          
            {success && (
              <p className="text-green-600 text-[18px] font-18 text-left mb-3">
                {success}
              </p>
            )}

            <form className="contact-form" onSubmit={handleResponse}>
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="text-left block uppercase tracking-wide text-lg font-bold mb-2"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className={`form-input focus:ring-blue-600 focus:border-blue-600`}
                  required
                  value={form.name}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                />
                {error.name && error.nameError ? (
                  <AuthErrorMessage message={error.nameError} />
                ) : null}
              </div>
              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-lg font-bold mb-2 text-left"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={`form-input focus:ring-blue-600 focus:border-blue-600`}
                  required
                  value={form.email}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                />
                {error.email && error.emailError ? (
                  <AuthErrorMessage message={error.emailError} />
                ) : null}
              </div>
              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-lg font-bold mb-2 text-left"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  className={`form-input message-input focus:ring-blue-600 focus:border-blue-600`}
                  required
                  value={form.message}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                />
                {error.message && error.messageError ? (
                  <AuthErrorMessage message={error.messageError} />
                ) : null}
              </div>
              <button
                data-aos="fade-up"
                data-aos-duration="500"
                type="submit"
                className="submit-btn"
                onClick={handleResponse}
              >
                Submit
              </button>
            </form>
          </div>
          <div
            className="contact-image"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              style={{ marginLeft: "10%" }}
              src={contactImage}
              alt="Contact"
              className="contact-image"
            />
          </div>
        </div>
        <div className="contact-social-icons">
          <h1 style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>
            Connect with us:
          </h1>
          <div className="social-icons">
            <Link to="/develop" className="social-icon-twitter">
              <FaTwitter />
            </Link>
            <Link
              to="https://github.com/rohansx/informatician"
              target="blank"
              className="social-icon-github"
            >
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
