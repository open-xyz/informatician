"use client"
import "../Navbar.css";
import { FaRegBookmark, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react'
import { useState } from "react";


export default function NavItems(props) {
  const { data:session } = useSession()
  const [user, setUser] = useState(session?.user?.email)

  const handleSignOut = () => {
    signOut();
    setUser(null);
  }


  return (
    <div style={{}}>
      <ul
        className="bg-primary"
        id="nav-items"
        style={{
          marginBottom: 0,
          transform:
            !props.clicked & props.drawer
              ? "translateX(500px)"
              : "translateX(0px)",
          transition:
            props.clicked & props.drawer
              ? "transform 0.3s ease-out"
              : "transform 0.3s ease-in",
        }}
      >
        <li>
          <div className="search-container search-mobile-view">
            <form action="" className="search-bar">
              <input type="text" placeholder="search..." name="q" className="bg-white" />
              <button type="submit">
                <FaSearch className="text-gray-500 ml-2" />
              </button>
            </form>
          </div>
          <Link
            href="/"
            className={props.pathname === "/" ? "active" : "dark:text-white"}
            onClick={props.handleOptionClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/books"
            className={props.pathname === "/books" ? "active" : "dark:text-white"}
            onClick={props.handleOptionClick}
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={props.pathname === "/about" ? "active" : "dark:text-white"}
            onClick={props.handleOptionClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={props.pathname === "/contact" ? "active" : "dark:text-white"}
            onClick={props.handleOptionClick}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className={props.pathname === "/login" ? "active" : "dark:text-white"}
            onClick={props.handleOptionClick}
          >
          {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : "LogIn"} 
          </Link>
        </li>

        <li>
          <Link href="/bookmark" title="Bookmark">
            <FaRegBookmark className="h-6 dark:text-white" />
          </Link>
        </li>
        <li>
          <Link href="/addBooks" title="Add Books" className="flex w-9">
            <Image
              loading="lazy"
              src="/add-book.png"
              alt="upload icon"
              width={40}
              height={40}
              className="h-8 mr-3 text-bold  hover:font-bold hover:shadow-md self-center dark:invert "
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
