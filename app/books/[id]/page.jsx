import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Books } from "@/utils/Constants";
import Image from "next/image";
import RStar from "@/components/RStar";

export const metadata = {
  title: "Book",
};

export default function BookComponent({ params }) {
  const { id } = params;
  const bookDetails = Books[id - 1];

  return (
    <div className="flex max-sm:flex-col items-center gap-12 max-w-5xl mx-auto p-8 mt-24">
      <div className="">
        <h1 className="font-semibold text-4xl">{bookDetails?.title}</h1>
        <div className="mt-4">
          <Link
            href={bookDetails?.authorPage}
            className="font-semibold text-blue-500 hover:text-blue-600"
          >
            Author: {bookDetails?.author}
          </Link>
        </div>
        <div className="flex items-center mt-4 text-gray-500">
          <RStar count={5} size={24} value={5} color2={"#ffd700"} />
          <span className="ml-2">{bookDetails?.ratings} Ratings</span>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl">About this Book</h2>
          <div>
            <p className="mt-2">
              <strong>{bookDetails?.aboutBook}</strong>
            </p>
            <p className="mt-2 text-justify">{bookDetails?.bookSynapsis}</p>
          </div>
        </div>
        <div className="bg-gray-200 text-black px-4 py-3 mt-9 rounded-lg">
          <p className="flex justify-between">
            <span className="font-semibold">Language:</span>
            <span>{bookDetails?.language}</span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="font-semibold">Publisher:</span>
            <span>{bookDetails?.author}</span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="font-semibold">Release Date:</span>
            <span>{bookDetails?.releaseDate}</span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="font-semibold">ISBN:</span>
            <span>{bookDetails?.isbn}</span>
          </p>
        </div>
      </div>
      <div className="max-sm:max-w-xs max-sm:w-full sm:min-w-[10rem] md:min-w-[14rem]">
        <div className=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            loading="lazy"
            src={bookDetails?.img}
            alt={bookDetails?.title}
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
            Start Reading
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
