import "../Navbar.css";
import { FaRegBookmark, FaSearch } from "react-icons/fa";
// import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
export default function NavItems(props) {
  return (
    <div style={{}}>
      <ul
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
          background: props.theme === "dark" ? "#001229" : "#eff6ff",
        }}
      >
        <li>
          <div className="search-container search-mobile-view">
            <form action="" className="search-bar">
              <input type="text" placeholder="search..." name="q" />
              <button type="submit">
                <FaSearch className="text-gray-500 ml-2" />
              </button>
            </form>
          </div>
          <Link
            href="/"
            className={
              props.pathname === "/"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/books"
            className={
              props.pathname === "/books"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              props.pathname === "/about"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              props.pathname === "/contact"
                ? "active"
                : props.theme === "dark"
                ? "text-white"
                : "text-dark"
            }
            onClick={props.handleOptionClick}
          >
            Contact Us
          </Link>
        </li>

        <li>
          <Link href="/bookmark">
            <FaRegBookmark
              style={{
                color: props.theme === "dark" ? "white" : "",
                height: "24px",
              }}
            />
          </Link>
        </li>
        <li>
          <Link href="/addBooks" className="flex" style={{ width: "34px" }}>
            <img
              loading="lazy"
              src="https://img.icons8.com/ios/80/add-book.png"
              alt="upload icon"
              className="h-8 mr-3 text-bold  hover:font-bold hover:shadow-md self-center  "
              style={{ filter: props.theme === "dark" ? "invert(1)" : "" }}
            />{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
