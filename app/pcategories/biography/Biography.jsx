"use client";
import { useState } from "react";
import { Books } from "@/utils/Constants";


import BkCards from "@/components/BkCards/BkCards";

export default function Biography() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <div className={`${!showMore && "pt-10"} pb-10`}>
      {showMore && (
        <BkCards bkhead="Everything About Biography & Memoir" books={Books} />
      )}
      {!showMore && (
        <button
          className="block mx-auto bg-blue-500 text-white border-none px-4 py-2 rounded cursor-pointer text-base hover:bg-blue-600 transition-colors duration-300"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
}
