"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className="w-11/12 flex flex-wrap mx-auto justify-center gap-12 items-center mt-28 mb-5 max-w-screen-2xl">
      <div className="" data-aos="fade-left" data-aos-duration="500">
        <Image
          width={400}
          height={400}
          loading="lazy"
          src={"/assets/mainPages/opensrc.webp"}
          className="rounded-xl"
          alt="a group of people sitting on a large white sign"
        />
      </div>
      <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="500">
        <h1 className="text-5xl mb-7 font-bold">Our Team</h1>
        <p className="text-justify text-lg mb-8">
          We are a dedicated team of contributors working on an open-source
          project. Together, we are passionate about creating innovative
          solutions and driving positive change in the software development
          community. Our project welcomes contributions from developers around
          the world. With the collective effort of the open-source community, we
          strive to build a robust and feature-rich software that addresses the
          needs of our users.
        </p>
        <Link
          className="submit-btn text-white dark:text-black bg-black dark:bg-white px-8 py-4 font-semibold rounded cursor-pointer transition-all duration-200 hover:bg-gray-300 hover:text-black"
          href="https://github.com/rohansx/informatician"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
}
