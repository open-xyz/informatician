import "./Footer.css";
import NewsLetter from "./NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import darkLogo from "../../assets/logos/dark_logo.png";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <NewsLetter />
      <footer>
        <div className=" footer_outer mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="footer_body">
            <div className=" footer_main mb-6 md:mb-0">
              <Link to="/" className="logo_img">
                <img
                  src={darkLogo}
                  className=" h-12 w-17 ml-1 mb-2.5  hover:shadow "
                  alt="Informatician logo"
                />
              </Link>
            </div>
            <div className="footer_inner_body">
              <div>
                <h2 className={`mb-6 text-m font-bold`}>About</h2>
                <ul className="font-medium">
                  <li className="mb-4">
                    <Link to="./about">About us</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="./team">Our Team</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="./contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/join">Join our team!</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={`mb-6 text-m font-bold `}>Support</h2>
                <ul className="  font-medium">
                  <li className="mb-4">
                    <Link to="./faq">Help/FAQ</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/accessibility">Accessibility</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/publishers">Publishers</Link>
                  </li>
                  <li>
                    <Link to="/adchoices">AdChoices</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className={`mb-6 text-m font-bold `}>Legal</h2>
                <ul className="  font-medium">
                  <li className="mb-4">
                    <Link to="./privacy">Privacy Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="./terms">Terms &amp; Conditions</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="./copyright">Copyright</Link>
                  </li>
                  <li>
                    <Link to="./cookie">Cookie Preference</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr
            className="my-4 sm:mx-auto  lg:my-8"
            style={{ borderColor: "var(--black)" }}
          />
          <div className="copyright_footer">
            <span className={`text-sm font-bold   sm:text-center `}>
              © {year}{" "}
              <a href="/" className="hover:underline">
                Informatician™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-0 space-x-6 sm:justify-center sm:mt-0 mr-14 2xl:mr-0">
              <Link
                to="/develop"
                target="_blank"
                className={` hover:text-[#00acee]`}
              >
                <BsTwitter className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="https://github.com/rohansx/informatician"
                target="_blank"
                className={` hover:text-[#12BC00]`}
              >
                <BsGithub className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110" />
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
