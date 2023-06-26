import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import alchemist from "../../../assets/selfHelp/alchemist.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function SingleBk10(props) {

    function handleClick() {
        setBookmarks(bookmarks)
        setColor("aqua")
    }

    const [bookmarks, setBookmarks] = useState([]);
    const [color, setColor] = useState("white");

    return (
        <div className="single-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="single">
                        <div className="inside-wrapper">
                            <div className="space hide"></div>
                            <div className="left-wrapper-content">
                                <div className="first-section">
                                    <span className="first-type" style={{ color: props.theme === "dark" ? 'white' : '' }}>Ebook</span>
                                </div>
                                <h1 className="bk-name">
                                    The Alchemist
                                </h1>
                                <div className="publication">
                                    <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                        By
                                        <Link
                                            className="pub-link"
                                            to="/books/book10"
                                            style={{ marginLeft: "5px", color: props.theme === "dark" ? 'white' : '' }}
                                        >
                                            <span className="d-flex">
                                                <span className="child">
                                                    Paulo Coelho
                                                </span>
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="user-rate">
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="rating-count">
                                        <Link className="pub-link" to="/books/book10" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                            <span className="d-flex">
                                                <span className="child">(1,103 ratings)</span>
                                            </span>
                                        </Link>
                                    </p>
                                </div>
                                <span>
                                    <div
                                        className="d-block"
                                        style={{ height: "29px", marginBottom: "24px" }}
                                    ></div>
                                </span>
                                <div style={{ marginBottom: "56px" }}>
                                    <h2 style={{ color: props.theme === "dark" ? 'white' : '' }} className="abt-bk">About this Book</h2>
                                    <div style={{ marginTop: "8px", fontSize: "1rem" }}>
                                        <div className="theory">
                                            <p>
                                                <strong>
                                                    Paulo Coelho, a Brazilian author, originally released his book The Alchemist in 1988. It was initially written in Portuguese, but it has since been widely translated into other languages. The Alchemist is an allegorical book that centres on a young Andalusian shepherd who dreams repeatedly of discovering a treasure at the Egyptian pyramids.{" "}
                                                </strong>
                                            </p>{" "}
                                            <br />
                                            <p>
                                                A recurring dream troubles Santiago, a young and adventurous Andalusian shepherd. He has the dream every time he sleeps under a sycamore tree that grows out of the ruins of a church. During the dream, a child tells him to seek treasure at the foot of the Egyptian pyramids. Santiago consults a gypsy woman to interpret the dream, and to his surprise she tells him to go to Egypt. A strange, magical old man named Melchizedek, who claims to be the King of Salem, echoes the gypsy’s advice and tells Santiago that it is his Personal Legend to journey to the pyramids. Melchizedek convinces Santiago to sell his flock and set off to Tangier. When Santiago arrives in Tangier, a thief robs him, forcing him to find work with a local crystal merchant. The conservative and kindly merchant teaches Santiago several lessons, and Santiago encourages the merchant to take risks with his business. The risks pay off, and Santiago becomes a rich man in just a year.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "40px" }}>
                                    <div className="bk-desc">
                                        <div className="lang">
                                            <span className="first-lang">Language</span>
                                            <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>English</span>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Publisher</span>
                                            <Link className="pub-link" to="/books/book10" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                                <span className="d-flex">
                                                    <span className="child">
                                                        Paulo Coelho
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Release Date</span>
                                            <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>17 October 2005</span>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">ISBN</span>
                                            <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>9780718074326</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="divider"></span>
                            </div>
                            <div className="space"></div>

                            <div className="right-wrapper-content">
                                <div className="side">
                                    <div style={{ marginBottom: "24px" }}>
                                        <div>
                                            <div className="book-box">
                                                <div className="thumbnail">
                                                    <img src={alchemist} alt="Vanderbilt" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: "16px" }}>
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            style={{
                                                backgroundColor: "#1e7b85",
                                                color: "white",
                                                width: "100%",
                                                marginBottom: "12px",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Start Reading
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            style={{
                                                width: "100%",
                                                marginBottom: "12px",
                                                fontWeight: 600,
                                                backgroundColor: "transparent", // Set the initial background color as transparent
                                                transition: "background-color 0.3s ease", // Add a transition effect
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#1e7b85"; // Change the background color on hover
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "transparent"; // Restore the initial background color when not hovered
                                            }}
                                        >
                                            Sample
                                        </button>{" "}
                                    </div>
                                    <div className="right-last">
                                        <ul className="right-list">
                                            <li>
                                                <button>
                                                    <div style={{ display: "flex", maxWidth: "190px" }}>
                                                        <div>
                                                            <FontAwesomeIcon
                                                                style={{ color: props.theme === "dark" ? 'white' : '', height: "24px", backgroundColor: color }}
                                                                icon={faBookmark}
                                                                onClick={() => { handleClick() }}
                                                            />
                                                        </div>
                                                        <div className="label" style={{ color: props.theme === "dark" ? 'white' : '' }}>Save for later</div>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
