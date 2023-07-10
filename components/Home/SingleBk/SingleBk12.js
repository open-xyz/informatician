import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import startsWithUs from "../../../assets/ebooks/starts-with-us.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function SingleBk12(props) {

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
                                    It Starts with Us
                                </h1>
                                <div className="publication">
                                    <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                        By
                                        <Link
                                            className="pub-link"
                                            to="/books/book12"
                                            style={{ marginLeft: "5px", color: props.theme === "dark" ? 'white' : '' }}
                                        >
                                            <span className="d-flex">
                                                <span className="child">
                                                    Colleen Hoover
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
                                        <Link className="pub-link" to="/books/book12" style={{ color: props.theme === "dark" ? 'white' : '' }}>
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

                                                    "It Starts with Us" by Colleen Hoover is a captivating and emotionally charged novel that explores themes of love, forgiveness, and the impact of our choices on ourselves and those around us. The story follows the lives of three interconnected characters, each dealing with their own personal struggles and secrets. As their lives intertwine, they are faced with difficult decisions that have far-reaching consequences. Hoover skillfully weaves together a tale of heartache, redemption, and the power of human connection.{" "}
                                                </strong>
                                            </p>{" "}
                                            <br />
                                            <p>
                                                With her signature blend of compelling storytelling and complex characters, "It Starts with Us" is a thought-provoking and compelling read that reminds us of the profound influence we have on the lives of others and the potential for personal growth and transformation. As the narrative unfolds, readers are drawn deeper into the intricacies of the characters' lives, their relationships, and the hidden truths they must confront. Colleen Hoover's evocative prose and ability to delve into the complexities of human emotions make "It Starts with Us" a compelling and immersive reading experience. The novel tackles themes of love, sacrifice, and the enduring power of hope, urging readers to reflect on their own lives and the impact they can have on shaping the world around them.
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
                                            <Link className="pub-link" to="/books/book12" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                                <span className="d-flex">
                                                    <span className="child">
                                                        Colleen Hoover
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
                                                    <img loading='lazy' src={startsWithUs} alt="It starts with us book thumbnail" />
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
