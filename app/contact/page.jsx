'use client'
import { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {validate} from "@/utils/validation";
import {AuthErrorMessage} from "@/utils/validation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

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
  const [success, setSuccess] = useState("");

  const handleResponse = async (e) => {
    e.preventDefault();
    setSuccess("");
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
      setSuccess("Contact Request sent successfully!!");
    } else {
      toast.error("Please fill the form correctly", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
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
    <div className="container max-w-5xl mt-16 py-16 mx-auto px-4">
      <div
        className="text-center"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          We'd love to hear from you! Reach out to us for any inquiries,
          feedback, or collaboration opportunities.
        </p>
      </div>

      <div className="border shadow-lg rounded-lg p-8 dark:shadow-gray-300/30">
        <div className="flex items-center justify-between gap-8 max-md:flex-col-reverse">
          <div className="w-full md:w-1/2">
            {success && (
              <p className="text-green-600 text-2xl mb-3">{success}</p>
            )}

            <form onSubmit={handleResponse} role="form">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-lg font-bold mb-2"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-600 focus:border-blue-600"
                  required
                  value={form.name}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  aria-labelledby="name"
                  aria-describedby={error.name && error.nameError ? "nameError" : null}
                  aria-required="true"
                  aria-invalid={error.name && error.nameError ? "true" : "false"}
                />
                {error.name && error.nameError ? (
                  <AuthErrorMessage
                    message={error.nameError}
                    role="alert"
                    id="nameError"
                    aria-live="assertive"
                  />
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-lg font-bold mb-2"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-600 focus:border-blue-600"
                  required
                  value={form.email}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  aria-labelledby="email"
                  aria-describedby={error.email && error.emailError ? "emailError" : null}
                  aria-required="true"
                  aria-invalid={error.email && error.emailError ? "true" : "false"}
                />
                {error.email && error.emailError ? (
                  <AuthErrorMessage
                    message={error.emailError}
                    role="alert"
                    id="emailError"
                    aria-live="assertive"
                  />
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-lg font-bold mb-2"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:ring-blue-600 focus:border-blue-600"
                  required
                  value={form.message}
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="500"
                  aria-labelledby="message"
                  aria-describedby={error.message && error.messageError ? "messageError" : null}
                  aria-required="true"
                  aria-invalid={error.message && error.messageError ? "true" : "false"}
                />
                {error.message && error.messageError ? (
                  <AuthErrorMessage
                    message={error.messageError}
                    role="alert"
                    id="messageError"
                    aria-live="assertive"
                  />
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white font-semibold bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
                onClick={handleResponse}
              >
                Submit
              </button>
            </form>
          </div>
          <div
            className="w-full md:w-1/2 flex items-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <Image
              width={600}
              height={600}
              src={"/assets/mainPages/contact-us.webp"}
              alt="Contact"
              className="w-full"
            />
          </div>
        </div>
        <div className="text-center mt-20">
          <h1 className="text-2xl mb-8">Connect with us:</h1>
          <div className="flex items-center justify-center space-x-4">
            <Link
              href="/develop"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-black text-white dark:bg-white dark:text-black rounded-full transition-all duration-300 hover:bg-blue-500">
              <FaTwitter />
            </Link>
            <Link
              href="https://github.com/rohansx/informatician"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-black text-white dark:bg-white dark:text-black rounded-full transition-all duration-300 hover:bg-gray-300">
              <FaGithub />
            </Link>
            <Link
              href="/develop"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-black text-white dark:bg-white dark:text-black rounded-full transition-all duration-300 hover:bg-blue-600">
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
