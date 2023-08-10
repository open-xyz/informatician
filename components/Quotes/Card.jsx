import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
const Card = ({ quote, author, category }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a temporary textarea element to copy the quote
    const textarea = document.createElement("textarea");
    textarea.value = quote;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Set the state to show the "Copied!" message for a short period
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <figure
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "360px",
        position: "relative",
        textAlign: "center",
      }}
      className="max-w-screen-md text-center bg-yellow-200 mr-5 rounded-md w-full px-[10px]"
    >
      <svg
        className="w-10 h-10 mx-auto mb-3 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p className="text-2xl italic font-medium text-gray-900">"{quote}"</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500">
          <cite className="pr-3 font-medium text-gray-900">{author}</cite>
          <cite className="pl-3 text-sm text-gray-500">{category}</cite>
        </div>
        <button
          onClick={handleCopyClick}
          className={`absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none flex items-center ${
            isCopied ? "justify-center" : ""
          }`}
        >
          {isCopied ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faCopy} />
          )}
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
