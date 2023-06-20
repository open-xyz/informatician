import React from "react";
import "./Accessibility.css";

const AccessibilityPage = (props) => {
    return (
        <div className="access" style={{ background: props.theme === "dark" ? "black" : "#f8f8f8", color: props.theme === "dark" ? "white" : "#333" }}>
            <div className="access-container">
                <h2 className="access-title">Accessibility Statement</h2>
                <div className="access-section">
                    <h3 className="access-section-title">Commitment to Accessibility</h3>
                    <div className="access-content">
                        <p>
                            At <strong><i> Informatician</i></strong>, we are committed to ensuring accessibility for all visitors to our website. We strive to make our website user-friendly and accessible to individuals with disabilities, in compliance with applicable accessibility standards and guidelines.
                        </p>
                    </div>
                </div>
                <div className="access-section">
                    <h3 className="access-section-title">Inclusive User Experience</h3>
                    <div className="access-content">
                        <p>
                            We aim to provide a positive and inclusive experience for all users, including those with visual, auditory, motor, and cognitive impairments. Our goal is to remove barriers and provide equal access to information and functionality on our website.
                        </p>
                    </div>
                </div>
                <div className="access-section">
                    <h3 className="access-section-title">Continuous Improvement</h3>
                    <div className="access-content">
                        <p>
                            We continuously work towards improving the accessibility of our website and implementing best practices. We value feedback from our users and welcome any suggestions or issues related to accessibility.
                        </p>
                    </div>
                </div>
                <div className="access-section">
                    <h3 className="access-section-title">Dedication to Accessibility</h3>
                    <div className="access-content">
                        <p>
                            We are dedicated to providing an accessible online environment for everyone and appreciate your support in this endeavor. Our commitment to accessibility is an ongoing effort, and we continuously strive to enhance the usability and inclusivity of our website based on user feedback and evolving accessibility standards.
                        </p>
                    </div>
                </div>
                <div className="access-section">
                    <h3 className="access-section-title">Third-Party Content and Integration</h3>
                    <div className="access-content">
                        <p>
                            Please note that while we make every effort to ensure accessibility, some third-party content or features integrated into our website may be beyond our immediate control. However, we strive to collaborate with accessible third-party providers to ensure a seamless and inclusive user experience.
                        </p>
                    </div>
                </div>
                <div className="access-section">
                    <h3 className="access-section-title">Feedback and Contact</h3>
                    <div className="access-content">
                        <p>
                            If you encounter any accessibility barriers or have any questions or suggestions regarding the accessibility of our website, please contact us using the information provided below. Your feedback is valuable in helping us enhance accessibility for all users.
                        </p>
                    </div>
                </div>
                <div className="access-section">
                    <h3 className="access-section-title">Contact Us</h3>
                    <div className="access-content">
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:informaticianx@gmail.com" className="contact-email">informaticianx@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityPage;
