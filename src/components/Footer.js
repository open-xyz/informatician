import React from "react";
import "./Custom.css";
import playstore from "../assets/logo_play_store.webp";
import appstore from "../assets/AppStore_Icon.webp";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-slate-800 rounded-t-lg ">
        <div className="mx-auto w-full max-w-screen-xl">
          <Newsletter />
          <div className="flex gap-8 px-4 py-6 lg:py-8 max-[500px]:flex-col">
            <div className="text-center min-[500px]:w-1/5">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase cursor-pointer">
                About
              </h2>
              <ul className="text-gray-400  font-medium ">
                <li className="mb-4">
                  <Link to="./about" className=" hover:text-gray-200">
                    About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="./team" className=" hover:text-gray-200">
                    Our team
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="./contact" className=" hover:text-gray-200">
                    Contact us
                  </Link>
                </li>

                
                
            </ul>
        </div>
        <div className="text-center min-[500px]:w-1/5">
        <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Customer Helpline</h2>
            <ul className="text-gray-400 dfont-medium">
            <li className="mb-4">
                    <Link to="#" className="hover:text-gray-200">+91 9000000000</Link>
                </li>
                <li className="mb-4">
                    <Link to="#" className="hover:text-gray-200">helpline@informatician.com</Link>
                </li>
              </ul>
            </div>
            <div className="text-center min-[500px]:w-1/5">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Support
              </h2>
              <ul className="text-gray-400 dfont-medium">
                <li className="mb-4">
                  <Link to="./faq" className="hover:text-gray-200">
                    FAQ/Help
                  </Link>

                </li>
                <li className="mb-4">
                  <a href="https://github.com/rohansx/informatician/issues" target="blank" className="hover:text-gray-200">
                    Report a Bug
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center min-[500px]:w-1/5">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Legal
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <Link to="./privacy" className="hover:text-gray-200">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="./terms" className="hover:text-gray-200">
                    Terms and Service
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="./cookie" className="hover:text-gray-200">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center min-[500px]:w-1/5">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Get our apps
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4 flex justify-center">
                  <Link to="#" className="hover:underline">
                    <img loading='lazy' src={appstore} className="h-10" alt="App Store" />
                  </Link>
                </li>
                <li className="mb-4 flex justify-center">
                  <Link to="#">
                    <img loading='lazy' className="h-7" src={playstore} alt="Play Store" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-slate-800 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-200  sm:text-center">
              © 2023 Book Listing app™. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <Link
                to="#"
                className="text-gray-400 hover:text-white hover:scale-125 "
              >
                <BsFacebook />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white hover:scale-125 "
              >
                <BsInstagram />
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white hover:scale-125 "
              >
                <BsTwitter />
                <span className="sr-only">Twitter page</span>
              </Link>
              <a
                to="https://github.com/rohansx/informatician"
                className="text-gray-400 hover:text-white hover:scale-125 "
              >
                <BsGithub />
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
