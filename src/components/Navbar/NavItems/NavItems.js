import "../Navbar.css";
import { Link } from "react-router-dom";

export default function NavItems(props) {
    return (
        <div style={{}}>
            <ul
                id="nav-items"
                // className={props.clicked ? "nav-active" : ""}
                style={{ marginBottom: 0, 
                    transform: (!props.clicked & props.drawer) ? 'translateX(277px)' : 'translateX(0px)',
                    transition: (props.clicked & props.drawer) ? 'transform 0.3s ease-out' : 'transform 0.3s ease-in'
                }}
            >
                <li>
                    <Link
                        to="/"
                        className={props.location.pathname === "/" ? "active" : ""}
                        onClick={props.handleOptionClick}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/books"
                        className={props.location.pathname === "/books" ? "active" : ""}
                        onClick={props.handleOptionClick}
                    >
                        Books
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={props.location.pathname === "/about" ? "active" : ""}
                        onClick={props.handleOptionClick}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={props.location.pathname === "/contact" ? "active" : ""}
                        onClick={props.handleOptionClick}
                    >
                        Contact Us
                    </Link>
                </li>
                <div className="search-container search-mobile-view">
                    <form action="" className="search-bar">
                        <input type="text" placeholder="search..." name="q" />
                        <button type="submit">
                            <i className="fa-solid fa-search"></i>
                        </button>
                    </form>
                </div>
            </ul>
        </div>
    )
}