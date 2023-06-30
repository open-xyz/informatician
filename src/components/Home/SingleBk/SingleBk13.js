import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import money from "../../../assets/career/money.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function SingleBk13(props) {

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
                                    The Psychology of Money
                                </h1>
                                <div className="publication">
                                    <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                        By
                                        <Link
                                            className="pub-link"
                                            to="/books/book13"
                                            style={{ marginLeft: "5px", color: props.theme === "dark" ? 'white' : '' }}
                                        >
                                            <span className="d-flex">
                                                <span className="child">
                                                    MORGAN HOUSEL
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

                                                    "The Psychology of Money" by Morgan Housel is an enlightening exploration of the complex relationship between money and human behavior. Housel delves into the psychological and behavioral aspects that drive our financial decisions, debunking common misconceptions and providing valuable insights. Drawing on real-life examples and research, he illustrates how our attitudes, biases, and emotions shape our financial choices and outcomes. {" "}
                                                </strong>
                                            </p>{" "}
                                            <br />
                                            <p>
                                                Housel emphasizes the importance of understanding the role of time, risk, and uncertainty in building wealth and achieving financial well-being. With a blend of storytelling and practical wisdom, "The Psychology of Money" offers a fresh perspective on money management, encouraging readers to redefine their relationship with money and adopt a more thoughtful and balanced approach to achieving financial success and happiness.
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
                                                        MORGAN HOUSEL
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Release Date</span>
                                            <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>8 September 2020</span>
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
                                                    <img loading='lazy' src={money} alt="Vanderbilt" />
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
