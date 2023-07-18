import './NewsLetter.css';
import React, { useState } from 'react';
export default function NewsLetter() {
  const [isInputValid, setInputValid] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValid(e.target.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <img src="https://user-images.githubusercontent.com/23297041/53905033-9570ad00-4058-11e9-809d-c090c0468264.png" />
        </div>
        <div className="subscribe__text">
          <p className="heading">Stay tuned</p>
          <p className="subheading">
            A newsletter about books, reading and writing.
          </p>
        </div>
        <form className="form" id="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className={`subscribe__input input ${
              isSubmitted ? 'disabled' : ''
            }`}
            onChange={handleInputChange}
            disabled={isSubmitted}
          />
          <button
            type="submit"
            value="Subscribe"
            className={`subscribe__btn btn ${
              isInputValid ? 'btn--active' : ''
            } ${isSubmitted ? 'btn--success' : ''}`}
            disabled={isSubmitted}
          >
            {isSubmitted ? "You're on the list! 👍" : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
}
