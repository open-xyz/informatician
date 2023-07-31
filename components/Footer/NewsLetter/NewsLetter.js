"use client"
import Image from 'next/image';
import './NewsLetter.css';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { backendURL } from '@/utils/Constants';


export default function NewsLetter() {
  const [isInputValid, setInputValid] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValid(e.target.checkValidity());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${backendURL}/api/addUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: e.target.email.value }),
        }
      );

      if (response.status === 200) {
        console.log("Subscribed");
        toast.success("Subscribed", { position: 'top-center', autoClose: 3000, theme: 'colored' })
      } else {
        console.log("Failed to subscribe");
        toast.error("Failed to subscribe. Please try again!", {
          position: "top-right",
          autoClose: 5000,
         
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("There was a problem with server, Please try again!", { position: 'top-center', autoClose: 3000, theme: 'colored' })
    }

    setSubmitted(true);
  };

  return (
    <div className="section">
      <p className="section-heading">Subscribe to our Newsletter</p>
      <div className="subscribe">
        <div
          className={`subscribe__image ${
            isSubmitted ? 'subscribe__image--success' : ''
          }`}
        >
          <Image src="https://user-images.githubusercontent.com/23297041/53905033-9570ad00-4058-11e9-809d-c090c0468264.png" alt="Subscribe Success" width={100} height={100}/>
        </div>
        <div className="subscribe__text">
          <p className="heading">Stay tuned</p>
          <p className="subheading">
            A newsletter about books, reading, and writing.
          </p>
        </div>
        <form className="form" id="form" onSubmit={handleSubmit} aria-label='Email Subscription Form'>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={`subscribe__input input ${
              isSubmitted ? 'disabled' : ''
            }`}
            onChange={handleInputChange}
            disabled={isSubmitted}
            aria-label='Email'
          />
          <button
            type="submit"
            value="Subscribe"
            className={`subscribe__btn btn ${
              isInputValid ? 'btn--active' : ''
            } ${isSubmitted ? 'btn--success' : ''}`}
            disabled={isSubmitted}
            id='btn'
            aria-label='Subscribe'
          >
            {isSubmitted ? "You're on the list! 👍" : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
}