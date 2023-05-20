import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import playstore from "../assets/logo_play_store.png";
import appstore from "../assets/AppStore_Icon.png";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-section-title">About</h3>
            <ul className="footer-section-list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">Our Team</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Support</h3>
            <ul className="footer-section-list">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="https://github.com/rohansx/informatician/issues/new">
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Legal</h3>
            <ul className="footer-section-list">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Social</h3>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="footer-social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="footer-social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Get Our Free Apps</h3>
            <div className="footer-app-links">
              <a href="#" className="footer-app-link">
                <img src={playstore} alt="Play Store" />
              </a>
              <a href="#" className="footer-app-link">
                <img src={appstore} alt="App Store" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">
              Subscribe to Our Newsletter
            </h3>
            <form className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2023 Informatician. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
