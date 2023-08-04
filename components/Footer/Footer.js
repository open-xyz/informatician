/** @format */

"use client";
import "./Footer.css";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import darkLogo from "@/public/assets/logos/dark_logo.png";
import { footerItems, columnNames } from "@/utils/Constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  let year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerComponents = footerItems?.map((coulmnItems, index) => {
    return (
      <div key={index}>
        <h2 className={`mb-6 text-m font-bold`}>{columnNames[index]}</h2>
        <ul className="font-medium">
          {coulmnItems.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                <Link href={item.itemLinks} onClick={scrollToTop}>
                  {item.itemName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <>
      <footer>
        <div className="sm:py-1 sm:px-7 mx-auto w-full max-w-screen-xl lg:py-3 lg:py-2">
          <div className="footer_body p-2">
            <div className="footer_main mb-4 md:mb-0 mt-0 py-2">
              <Link href="/" onClick={scrollToTop}>
                <Image
                  src={darkLogo}
                  className="hover:shadow mix-blend-lighten"
                  alt="Informatician logo"
                  width="200"
                  height="200"
                />
              </Link>
            </div>
            <div className="footer_inner_body mt-2 mx-2">
              {footerComponents?.map((item, index) => {
                return (
                  <div key={index} className="footer_inner_body_item">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="copyright_footer p-6 mx-6 mt-2 sm:flex-col sm:justify-center sm:items-center sm:gap-5 sm:mt-7 lg:justify-around lg:flex-row">
            <span className={`text-sm font-bold sm:text-center text-blue-500`}>
              © {year}{" "}
              <a href="/" onClick={scrollToTop} className="hover:underline">
                Informatician™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-0 space-x-6 sm:justify-center sm:mt-0 lg:mr-14 2xl:mr-0">
              <Link
                href="/develop"
                title="Twitter(External Link)"
                target="_blank"
                aria-label="Follow us on Twitter"
                rel="noopener noreferror"
              >
                <BsTwitter className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 twitter" />
              </Link>
              <Link
                href="https://github.com/rohansx/informatician"
                title="GitHub(External Link)"
                target="_blank"
                aria-label="Follow us on GitHub"
                rel="noopener noreferror"
              >
                <BsGithub className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 github" />
              </Link>
              <Link
                href="#"
                title="Discord(External Link)"
                target="_blank"
                aria-label="Follow us on Discord"
                rel="noopener noreferror"
              >
                <BsDiscord className="w-6 h-6 transition-all duration-200 ease-in-out transform hover:scale-110 discord" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
