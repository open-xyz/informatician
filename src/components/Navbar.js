import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { AiOutlineSearch, AiOutlineCloseSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./Custom.css";
// import "./Navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-slate-800  shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">
                Book Listing App
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoCloseSharp className="text-white" />
                ) : (
                  <GiHamburgerMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        </div>
        <div>

            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-white hover:text-indigo-200">
                        <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                        <a href="javascript:void(0)">Books</a>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                        <a href="javascript:void(0)">About</a>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                        <a href="javascript:void(0)">Contact US</a>
                    </li>
                    <li className="text-white hover:text-indigo-200">
                        <a href="/faq">FAQ</a>
                    </li>
                </ul>

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {/* <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Books</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">About</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Contact US</a>
              </li>
            </ul> */}


            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              <form>
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />

                  <button
                    type="submit"
                    className="text-white flex absolute right-2 top-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  >
                    <AiOutlineSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />

              <button
                type="submit"
                className="text-white mx-auto absolute right-2 top-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                <AiOutlineSearch className="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
