import React, { useEffect } from "react";

// import playstore from "../../assets/logo_play_store.webp";
// import appstore from "../../assets/AppStore_Icon.webp";
import NewsLetter from "./NewsLetter/NewsLetter";
import { Link, useLocation } from "react-router-dom";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import "./Footer.css";
import lightLogo from "../../assets/logos/light_logo.png";
import darkLogo from "../../assets/logos/dark_logo.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Footer = (props) => {
  let year = new Date().getFullYear();

  const themeImage = props.theme === "dark" ? darkLogo : lightLogo;

  return (
    <>
      <ScrollToTop />

      <NewsLetter />

      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <Link to="/" className="logo">
                  <img
                    src={themeImage}
                    className=" h-12 w-17 ml-1 mb-2.5  hover:shadow "
                    alt="Informatician logo"
                  />
                </Link>
                {/* <span className="self-center text-3xl font-bold whitespace-nowrap transition-all duration-300 ease-in-out">
                  Informatician
                </span> */}
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className={`mb-6 text-m font-bold`}>
                  Explore
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link
                      to="./benefits"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Benefits
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="./formats"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Book Formats
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className={`mb-6 text-m font-bold`}>
                  About
                </h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link
                      to="./about"
                      className="transition-all duration-300 ease-in-out"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="./team"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="./contact"
                      className="transition-all duration-300 ease-in-out "
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/join"
                      className="transition-all duration-300 ease-in-out "
                    >
                      Join our team!
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={`mb-6 text-m font-bold `}>
                  Support
                </h2>
                <ul className="  font-medium">
                  <li className="mb-4">
                    <Link
                      to="./faq"
                      className="transition-all duration-300 ease-in-out "
                    >
                      Help/FAQ
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/accessibility"
                      className="transition-all duration-300 ease-in-out "
                    >
                      Accessibility
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="/publishers"
                      className="transition-all duration-300 ease-in-out  "
                    >
                      Publishers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/adchoices"
                      className="transition-all duration-300 ease-in-out "
                    >
                      AdChoices
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={`mb-6 text-m font-bold `}>
                  Legal
                </h2>
                <ul className="  font-medium">
                  <li className="mb-4">
                    <Link
                      to="./privacy"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="./terms"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="./copyright"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Copyright
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./cookie"
                      className="transition-all duration-300 ease-in-out"
                    >
                      Cookie Preference
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-4 sm:mx-auto  lg:my-8" style={{ borderColor: "var(--black)" }} />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className={`text-sm font-bold   sm:text-center `}>
              © {year}{" "}
              <a href="/" className="hover:underline">
                Informatician™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-0 space-x-6 sm:justify-center sm:mt-0 mr-14 2xl:mr-0">
              <Link to="/develop" target="_blank" className={` hover:text-[#00acee]`} >
                <BsTwitter className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="https://github.com/rohansx/informatician"
                target="_blank"
                className={` hover:text-red-900`}
              >
                < BsGithub className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link to="#" className={` hover:fill-[#5865F2]`}>
                <BsDiscord className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
                <span className="sr-only">Dribbble account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
