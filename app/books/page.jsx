import React from "react";
import BookList from "./BookList";

export default function page() {
  return (
    <section className="p-6 sm:p-12 grid place-items-center gap-4 mt-16 max-w-7xl mx-auto">
      <div className="text-center space-y-6 sm:mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-sky-700">
          Find your next learning adventure
        </h1>
        <p className="text-base sm:text-xl text-gray-600 mb-8">
          From Art to Universe , we have a lots of textbooks to offer you.
        </p>
      </div>
      <BookList />
    </section>
  );
}
