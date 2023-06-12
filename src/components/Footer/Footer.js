import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NewsLetter from "./NewsLetter/NewsLetter";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Footer = (props) => {
  let year = new Date().getFullYear();
  return (
    <>
      <ScrollToTop />

      <NewsLetter />

      <footer
        className="bg-blue-50"
        style={{
          background: props.theme === "dark" ? "black" : "",
          color: props.theme === "dark" ? "white" : "",
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://user-images.githubusercontent.com/33249782/240937486-d84c477d-63f4-4558-ae04-454d803a5b1f.png"
                  className="h-8 mr-3"
                  alt=" Logo"
                  style={{ filter: props.theme === "dark" ? "invert(1)" : "" }}
                />
                <span className="self-center text-3xl font-bold hover:text-gray-600 whitespace-nowrap">
                  Informatician
                </span>
              </Link>
            </div>
            
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 flex justify-between flex-col sm:flex-row">
            
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className={`mb-6 text-m font-bold text-${props.theme === "dark" ? "white" : "gray"}-900 uppercase `}>
                  About
                </h2>
                <ul className="text-gray-600 font-medium">
                  <li className="mb-4">
                    <Link to="./about" className="hover:underline hover:text-gray-900">
                      About us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="./team" className="hover:underline  hover:text-gray-900">
                      Our Team
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="./contact" className="hover:underline  hover:text-gray-900">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Join our team!
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={`mb-6 text-m font-bold text-${props.theme === "dark" ? "white" : "gray"}-900 uppercase `}>
                  Support
                </h2>
                <ul className="text-gray-600  font-medium">
                  <li className="mb-4">
                    <Link to="./faq" className="hover:underline  hover:text-gray-900">
                      Help/FAQ
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Accessibility
                    </Link>
                    </li>
                  <li className="mb-4">
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={`mb-6 text-m font-bold text-${props.theme === "dark" ? "white" : "gray"}-900 uppercase `}>
                  Legal
                </h2>
                <ul className="text-gray-600  font-medium">
                  <li className="mb-4">
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/develop" className="hover:underline  hover:text-gray-900">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 flex justify-between">
            <div>
              <p className={`text-sm text-${props.theme === "dark" ? "white" : "gray"}-500`}>
                &copy; {year} Informatician. All rights reserved.
              </p>
            </div>
            <div className="flex items-center">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-gray-500 hover:text-gray-600 text-xl mr-3"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-gray-500 hover:text-gray-600 text-xl mr-3"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-gray-500 hover:text-gray-600 text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
