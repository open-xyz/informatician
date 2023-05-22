import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy">
      <div className="privacy-container">
        <h2 className="privacy-title">Privacy Policy</h2>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Introduction</h3>
          <div className="privacy-content">
            <p>
              Thank you for using Book Listing App! This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our application.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Information Collection and Use</h3>
          <div className="privacy-content">
            <p>
              We may collect certain information about you when you use Book Listing App, such as your name, email address, and usage data. We use this information to provide and improve our services, personalize your experience, and communicate with you.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Information Sharing and Disclosure</h3>
          <div className="privacy-content">
            <p>
              We may share your personal information with third-party service providers who assist us in operating our application, conducting business, or providing services to you. However, we will not sell, trade, or rent your personal information to others without your consent.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">External Links</h3>
          <div className="privacy-content">
            <p>
              Book Listing App may contain links to external websites or third-party services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Data Security</h3>
          <div className="privacy-content">
            <p>
              We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Consent</h3>
          <div className="privacy-content">
            <p>
              By using Book Listing App, you consent to the collection and use of your personal information as described in this Privacy Policy.
            </p>
          </div>
        </div>
        <div className="privacy-section">
          <h3 className="privacy-section-title">Contact Us</h3>
          <div className="privacy-content">
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@booklistingapp.com" className="contact-email">contact@booklistingapp.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
