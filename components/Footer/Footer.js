"use client"
import "./Footer.css";
import NewsLetter from "./NewsLetter/NewsLetter";
import darkLogo from "@/public/assets/logos/dark_logo.png";
import { footerItems, columnNames } from "@/utils/Constants"
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

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
                <Link href={item.itemLinks} onClick={scrollToTop}>{item.itemName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <>
      <NewsLetter />
      <footer className="text-white">
        {/*  */}
        <div class="grid sm:grid-rows-4 md:grid-cols-3 lg:grid-cols-5 md:grid-rows-1 text-neutral-800">
          <div class="footer col-span-1 border border-[#001229] p-8">
            <div className="flex flex-col">
              <Link href="/" onClick={scrollToTop} >
                <Image
                  src={darkLogo}
                  className="hover:shadow "
                  alt="Informatician logo"
                  width="200"
                  height="200"
                />
              </Link>
              <h2 className={`mb-6 pt-8 text-m font-bold`}>Follow us</h2>
              <SocialMedia />

            </div>
          </div>

          {footerComponents?.map((item, index) => {
            return (
              <div className="col-span-1 border border-[#001229] p-8">
                <div className="flex flex-col">
                  <div key={index} className="footer_inner_body_item">
                    {item}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <div class="sm:text-sm p-4 text-center sm:text-center text-blue-500">
          © {year}{" "}
          <a href="/" onClick={scrollToTop} className="hover:underline">
            Informatician™
          </a>
          . All Rights Reserved.
        </div>

      </footer>
    </>
  );
};

export default Footer;