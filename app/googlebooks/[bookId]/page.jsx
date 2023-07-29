"use client"

import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Link from 'next/link';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

export default function BookComponent({ params }) {
  const { bookId } = params;
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    // Function to fetch book details from Google Books API
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex max-sm:flex-col items-center gap-12 max-w-5xl mx-auto p-8 mt-24">
      <div className="">
        <h1 className="font-semibold text-4xl">{bookDetails?.volumeInfo.title}</h1>
        <div className="mt-4">
          {/* <Link href={bookDetails?.authorPage} className="font-semibold text-blue-500 hover:text-blue-600">
                    Author: {bookDetails?.author}
            </Link> */}
        </div>
        <div className="flex items-center mt-4 text-gray-500">
          <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
          <span className="ml-2">{bookDetails?.ratings} Ratings</span>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl">About this Book</h2>
          <div>
            <p className="mt-2">
              <strong>{bookDetails.volumeInfo.subtitle}</strong>
            </p>
            {/* Render description with HTML formatting */}
            <div className="mt-2"
              dangerouslySetInnerHTML={{
                __html: bookDetails.volumeInfo.description,
              }}
            />
          </div>
        </div>
        <div className="bg-gray-200 text-black px-4 py-3 mt-9 rounded-lg">
          <p className="flex justify-between">
            <span className="font-semibold">Language:</span>
            <span>{bookDetails.volumeInfo.language}</span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="font-semibold">Publisher:</span>
            <span>{bookDetails.volumeInfo.publisher}</span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="font-semibold">Release Date:</span>
            <span>{bookDetails.volumeInfo.publishedDate}</span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="font-semibold">ISBN:</span>
            <span>{bookDetails.volumeInfo.industryIdentifiers[0].identifier}</span>
          </p>
        </div>
      </div>
      <div className="max-sm:max-w-xs max-sm:w-full sm:min-w-[10rem] md:min-w-[14rem]">
        <div className=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            loading="lazy"
            src={bookDetails.volumeInfo.imageLinks.thumbnail}
            alt={bookDetails.volumeInfo.title}
            width={100}
            height={100}
            className="h-auto w-full"
          />
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="w-full py-2 px-4 rounded-md bg-blue-500 text-white font-semibold mb-3 hover:bg-blue-600"
          >
             <Link
             href={`/googlebooks/${bookId}/${bookDetails.volumeInfo.industryIdentifiers[0].identifier}`}

              className="btn"
            >
              Start Reading
            </Link>
          </button>
          <button
            type="button"
            className="w-full py-2 px-4 rounded-md border border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white"
          >
            Sample
          </button>
        </div>
        <button className="flex items-center justify-center w-full mt-6 text-gray-600 hover:text-blue-600">
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <div className="ml-1">Save for later</div>
        </button>
      </div>
    </div>
  );
}
