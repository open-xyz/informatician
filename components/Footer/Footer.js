"use client";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import darkLogo from "@/public/assets/logos/dark_logo.png";
import { footerItems, columnNames } from "@/utils/Constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  let year = new Date().getFullYear();

  const footerComponents = footerItems?.map((columnItems, index) => {
    return (
      <div key={index}>
        <h2 className={`mb-6 text-m font-bold`} style={{ color:'aliceblue', fontSize: '1.3rem', borderBottom: '2.5px solid #0096FF', width:'66px'}}>{columnNames[index]}</h2>
        <ul className="font-medium">
          {columnItems.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                <Link href={item.itemLinks}>
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
      <footer className="bg-gradient-to-r bg-slate-900 text-white">
        <div className="sm:py-1 sm:px-7 mx-auto w-full max-w-screen-xl lg:py-3">
          <div className="footer_body p-2">
            <div className="footer_main mb-4 md:mb-0 mt-0 py-2">
              <Link href="/">
                <Image
                  src={darkLogo}
                  className="hover:shadow mix-blend-lighten"
                  alt="Informatician logo"
                  width="200"
                  height="200"
                />
              </Link>
            </div>
            <div className="mt-2 mx-2 flex flex-wrap justify-evenly gap-8">
              {footerComponents?.map((item, index) => {
                return (
                  <div key={index} className="w-40">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="copyright_footer p-6 mx-6 mt-2 flex flex-wrap max-sm:flex-wrap-reverse justify-center gap-8 sm:justify-between">
            <span className="text-sm font-bold text-blue-500 max-sm:text-center">
              © {year}{" "}
              <Link
                href="/"
                className="hover:underline text-white"
              >
                Informatician™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-0 space-x-6">
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