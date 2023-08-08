"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SBook({ bookFormat }) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      key={bookFormat.id}
      className="w-full md:w-11/12 mx-auto my-8 shadow-md overflow-hidden border rounded-2xl dark:bg-gray-900"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className="md:flex md:items-center">
        <div className="md:w-1/2 md:p-6">
          <div className="h-64 md:h-80 rounded-2xl overflow-hidden md:hfull relative w-full grid place-items-center">
            <Image
              loading="lazy"
              src={bookFormat.image}
              // layout="fill"
              // objectFit="cover"
              width={450}
              height={400}
              alt={bookFormat.name}
              className="md:h-80 w-auto rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-4xl font-bold mb-4">{bookFormat.name}</h1>
          <div className="text-lg mb-6">{bookFormat.description}</div>
          <div className="text-lg">
            <u>Some Winners:</u>
            {bookFormat.topBooks.map((winner, index) => (
              <p key={index} className="mt-2">
                {index + 1}. {winner.title} {winner.author && "by"}{" "}
                {winner.author}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <button className="px-4 py-2 font-semibold text-white bg-black dark:text-black dark:bg-white rounded-lg pointer-events-none">
              <Link href="#">Explore more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
