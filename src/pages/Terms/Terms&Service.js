import React from "react";
import "./TermsAndService.css";

const TermsAndService = () => {
  return (
    <main className="terms" role="main">
      <div className="container">
        <h1 className="terms-title" id="terms-and-servcie-block">Terms and Service</h1>
        <section className="terms-content" aria-labelledby="terms-and-servcie-block">
          <p>
            Welcome to Book Listing App! These terms and conditions outline the rules and regulations for the use of our
            application.
          </p>
          <p>
            By accessing or using Book Listing App, you agree to be bound by these terms. If you disagree with any part of
            these terms, please do not use our application.
          </p>
          <p>
            The content and materials provided on Book Listing App are for general information and entertainment purposes
            only. We do not guarantee the accuracy, completeness, or suitability of the information and materials on our
            application. Your use of any information or materials on Book Listing App is entirely at your own risk.
          </p>
          <p>
            Book Listing App may contain links to external websites that are not provided or maintained by us. We do not
            endorse or assume any responsibility for the content of those websites or any damages or losses incurred as a
            result of accessing those websites.
          </p>
          <p>
            By using Book Listing App, you agree not to:
          </p>
          <ul role="list">
            <li role="listitem">Violate any applicable laws or regulations;</li>
            <li role="listitem">Interfere with or disrupt the security or integrity of our application;</li>
            <li role="listitem">Attempt to gain unauthorized access to any portion of our application;</li>
            <li role="listitem">Transmit any viruses, worms, or other harmful computer code;</li>
            <li role="listitem">Use our application to send unsolicited commercial communications;</li>
            <li role="listitem">Engage in any conduct that restricts or inhibits any other user from using or enjoying our application.</li>
          </ul>
          <p>
            We reserve the right to terminate or suspend your access to Book Listing App without prior notice or liability for
            any reason, including if you breach these terms and conditions.
          </p>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction. Any
            disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in
            your jurisdiction.
          </p>
          <p>
            If you have any questions or concerns about these terms and conditions, please contact us at&nbsp;
            <a href="mailto:informaticianx@gmail.com" className="contact-email" aria-live="polite" aria-describedby="Mail address of Informatician">informaticianx@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsAndService;
