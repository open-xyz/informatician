import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import playstore from "../../assets/logo_play_store.png";
import appstore from "../../assets/AppStore_Icon.png";
import NewsLetter from "./NewsLetter/NewsLetter";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <NewsLetter />
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <h3 className="footer-section-title">About</h3>
                <ul className="footer-section-list">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3 className="footer-section-title">Support</h3>
                <ul className="footer-section-list">
                  <li>
                    <Link to="/faq">FAQ/Help</Link>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/rohansx/informatician/issues/new">Report a Bug</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3 className="footer-section-title">Legal</h3>
                <ul className="footer-section-list">
                  <li>
                    <Link to="/terms">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/cookie">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3 className="footer-section-title">Social</h3>
                <div className="footer-social-icons">
                  <Link to="/develop" className="footer-social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="/develop" className="footer-social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link to="/develop" className="footer-social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <h3 className="footer-section-title">Get Our Free Apps</h3>
                <div className="footer-app-links">
                  <Link to="/develop" className="footer-app-link">
                    <img src={playstore} alt="Play Store" />
                  </Link>
                  <Link to="/develop" className="footer-app-link">
                    <img src={appstore} alt="App Store" />
                  </Link>
                </div>
              </div>
              
            </div>
            <div className="footer-bottom">
              &copy; 2023 Informatician. All rights reserved.
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
