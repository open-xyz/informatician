
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTrophy } from "@fortawesome/free-regular-svg-icons";

import Image from "next/image";

import { useState, useEffect } from "react";

const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    args.length > 0 &&
    typeof args[0] === "string" &&
    args[0].includes("defaultProps will be removed from function components")
  ) {
    return;
  }
  originalConsoleError(...args);
};

export default function CardContent(props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  function getNumberWithSuffix(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const lastDigit = number % 10;
    const suffixIndex =
      lastDigit <= 3 && (number < 10 || number > 20) ? lastDigit : 0;
    return `${number}${suffixes[suffixIndex]}`;
  }
  const bgColors = [
    "bg-blue-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-green-200",
    "bg-indigo-200",
  ];
  const random_color = bgColors[Math.floor(Math.random() * bgColors.length)];

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  // Assuming you have a prop 'rank' to pass the rank value

  return (
    <div className="bk-view flex flex-col items-center mx-auto overflow-hidden shadow dark:shadow-white transition-all w-40">
      <div
        className={
          isMounted
            ? `${random_color} w-full h-44 rounded-t-md`
            : "w-full h-44 rounded-t-md"
        }
      />
      <Image
        src={props.imgName}
        alt={props.title}
        width={130}
        height={180}
        className="rounded-md transition-all duration-500 transform hover:scale-95 h-44 mt-4 absolute"
      />
      <div className="bk-details max-w-[calc((190px-13px)*2)] mt-5 md:mt-7 px-4 md:px-5">
        <p className="font-sans text-xs md:text-sm text-gray-600">
          {props.type}
        </p>
        <p className="font-sans font-semibold text-lg leading-tight mt-1 md:mt-2 text-left h-12 line-clamp-2">
          {props.title}
        </p>
        <p className="font-sans text-sm md:text-base leading-tight text-gray-700 line-clamp-2 mt-1 md:mt-2">
          {props.description}
        </p>
      </div>
      <div className="reviews mt-2 md:mt-4 flex items-center justify-between w-11/12 md:w-90% xl:w-80%">
        <div className="rank flex items-center">
          <span className="mr-1">Rank:</span>
          <span className=" text-[green] inline-block font-[bold] leading-[1.6em] text-center w-[1.6em] mr-[5px] rounded-[0.8em]">
            {getNumberWithSuffix(props.rank)}
          </span>
        </div>
        <div className="save border-2 border-gray-300 dark:border-gray-600 rounded-full p-1 md:p-2 cursor-pointer transition-colors hover:bg-green-500 dark:hover:bg-green-400">
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    </div>
  );
}
