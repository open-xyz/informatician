import React from "react";
import "./Cookie.css";

const CookiePolicy = () => {
  return (
    <div className="privacy">
      <div className="privacy-container">
        <h2 className="privacy-title">Cookie Policy</h2>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Introduction</h3>
          <div className="privacy-content">
            <p>
              Thank you for using Book Listing App! This Cookie Policy explains how we use cookies and similar technologies when you use our application.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">What Are Cookies</h3>
          <div className="privacy-content">
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device and remember certain information about your preferences or actions.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">How We Use Cookies</h3>
          <div className="privacy-content">
            <p>
              We use cookies to analyze user behavior, personalize your experience, and improve our services. These cookies may be session cookies (temporary) or persistent cookies (stored on your device).
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Third-Party Cookies</h3>
          <div className="privacy-content">
            <p>
              Book Listing App may use third-party services that use cookies for various purposes, such as analytics or advertising. We have no control over these third-party cookies and recommend reviewing their respective privacy policies.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Your Cookie Choices</h3>
          <div className="privacy-content">
            <p>
              You can manage or disable cookies in your browser settings. However, please note that some features or functionality of Book Listing App may be affected if cookies are disabled.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Changes to This Cookie Policy</h3>
          <div className="privacy-content">
            <p>
              We may update this Cookie Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of Book Listing App after any modifications to the Cookie Policy constitutes your acceptance of the updated policy.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Contact Us</h3>
          <div className="privacy-content">
            <p>
              If you have any questions or concerns about this Cookie Policy, please contact us at <a href="mailto:contact@booklistingapp.com" className="contact-email">contact@booklistingapp.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
