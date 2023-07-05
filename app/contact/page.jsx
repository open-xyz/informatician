"use client"

import React, { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import contactImage from "../../public/assets/mainPages/contact-us.webp";
import styles from "../../styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import validate from "../../utils/validation";
import AuthErrorMessage from "../../utils/AuthError";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
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
    Object.values(error).forEach((err) => {
      if (err !== false) {
        submitable = false;
        return;
      }
    });

    if (submitable) {
      await fetch("http://localhost:3000/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setsuccess("Contact Request sent successfully!!");
    } else {
      alert("Please provide valid data in all fields");
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
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.c_head}>
          <h1
            className={styles["contact-title"]}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Contact Us
          </h1>
          <p
            className={styles["contact-description"]}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            We'd love to hear from you! Reach out to us for any inquiries,
            feedback, or collaboration opportunities.
          </p>
        </div>

        <div className={styles["contact-content"]}>
          <div className={styles["contact-text"]}>
            {success && (
              <p className={`${styles["text-green-600"]} ${styles["text-18"]} ${styles["font-18"]} ${styles["text-left"]} mb-3`}>
                {success}
              </p>
            )}

            <form className={styles["contact-form"]} onSubmit={handleResponse}>
              <div className={styles["form-field"]}>
                <label
                  htmlFor="name"
                  className={`${styles["block"]} ${styles["uppercase"]} ${styles["tracking-wide"]} ${styles["text-lg"]} ${styles["font-bold"]} ${styles["mb-2"]}`}
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
                  className={`${styles["form-input"]} ${styles["focus:ring-blue-600"]} ${styles["focus:border-blue-600"]}`}
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
              <div className={styles["form-field"]}>
                <label
                  htmlFor="email"
                  className={`${styles["block"]} ${styles["uppercase"]} ${styles["tracking-wide"]} ${styles["text-lg"]} ${styles["font-bold"]} ${styles["mb-2"]} ${styles["text-left"]}`}
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
                  className={`${styles["form-input"]} ${styles["focus:ring-blue-600"]} ${styles["focus:border-blue-600"]}`}
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
              <div className={styles["form-field"]}>
                <label
                  htmlFor="message"
                  className={`${styles["block"]} ${styles["uppercase"]} ${styles["tracking-wide"]} ${styles["text-lg"]} ${styles["font-bold"]} ${styles["mb-2"]} ${styles["text-left"]}`}
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  className={`${styles["form-input"]} ${styles["message-input"]} ${styles["focus:ring-blue-600"]} ${styles["focus:border-blue-600"]}`}
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
                className={styles["submit-btn"]}
                onClick={handleResponse}
              >
                Submit
              </button>
            </form>
          </div>
          <div
            className={styles["contact-image"]}
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <Image
              style={{ marginLeft: "10%" }}
              src={contactImage}
              alt="Contact"
              className={styles["contact-image"]}
            />
          </div>
        </div>
        <div className={styles["contact-social-icons"]}>
          <h1 style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>
            Connect with us:
          </h1>
          <div className={styles["social-icons"]}>
            <Link href="/develop" className={styles["social-icon-twitter"]}>
              <FaTwitter />
            </Link>
            <Link
              href="https://github.com/rohansx/informatician"
              target="_blank"
              className={styles["social-icon-github"]}
            >
              <FaGithub />
            </Link>
            <Link href="/develop" className={styles["social-icon-discord"]}>
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}