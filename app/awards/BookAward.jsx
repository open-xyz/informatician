'use client'

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from 'aos';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BookAward({award}) {
    useEffect(() => {
        Aos.init({
            once: false,
        });
        Aos.refresh();
    }, []);
  return (
      <div
          key={award.id}
          className="w-full md:w-11/12 mx-auto my-8 shadow-md overflow-hidden border rounded-2xl dark:bg-gray-900"
          data-aos="fade-right"
          data-aos-duration="500"
      >
          <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:p-6">
                  <div className="h-64 md:h-80 rounded-2xl overflow-hidden md:hfull relative w-full grid place-items-center bg-white">
                      <Image
                          loading="lazy"
                          src={award.image}
                          // layout="fill"
                          objectFit="cover"
                          alt={award.name}
                          className="h-full w-auto rounded-2xl"
                      />
                  </div>
              </div>
              <div className="md:w-1/2 p-6">
                  <h1 className="text-4xl font-bold mb-4">{award.name}</h1>
                  <div className="text-lg mb-6">{award.description}</div>
                  <div className="text-lg">
                      <u>Some Winners:</u>
                      {award.winners.map((winner, index) => (
                          <p key={index} className="mt-2">
                              {index + 1}. {winner.category}: "{winner.book}" by{" "}
                              {winner.author}
                          </p>
                      ))}
                  </div>
                  <div className="mt-8">
                      <button className="px-4 py-2 font-semibold text-white bg-black dark:text-black dark:bg-white rounded-lg pointer-events-none">
                          <Link href="#">
                              Explore more
                          </Link>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  )
}
