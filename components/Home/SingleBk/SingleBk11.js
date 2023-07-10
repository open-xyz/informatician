import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import atomic from "../../../assets/ebooks//atomic-habits.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function SingleBk11(props) {

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
                                    Atomic Habits
                                </h1>
                                <div className="publication">
                                    <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                        By
                                        <Link
                                            className="pub-link"
                                            to="/books/book11"
                                            style={{ marginLeft: "5px", color: props.theme === "dark" ? 'white' : '' }}
                                        >
                                            <span className="d-flex">
                                                <span className="child">
                                                    James Clear
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
                                        <Link className="pub-link" to="/books/book11" style={{ color: props.theme === "dark" ? 'white' : '' }}>
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
                                                    Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones. An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.{" "}
                                                </strong>
                                            </p>{" "}
                                            <br />
                                            <p>
                                                "Atomic Habits" by James Clear is a game-changing book that explores the profound impact of our habits on personal and professional success. Clear unravels the underlying mechanisms of habit formation and presents a compelling argument for the significance of small, incremental changes in shaping our behavior. By focusing on the concept of identity-based habits, he encourages readers to align their actions with the type of person they aspire to be. Clear provides practical strategies to make habit formation attractive, easy, and rewarding, emphasizing the importance of tracking progress and maintaining consistency. With engaging stories, practical examples, and actionable advice, "Atomic Habits" empowers individuals to take control of their habits, rewrite their narrative, and unleash their full potential for long-lasting transformation.
                                            </p>{" "}
                                            <p>
                                                Moreover, "Atomic Habits" highlights the crucial role of the environment in shaping our habits. Clear emphasizes the importance of designing our surroundings to support positive behaviors and eliminate triggers for bad habits. By optimizing our physical and social environments, we can create frictionless pathways for desired actions and make it easier to avoid temptations. The book also delves into the concept of habit stacking, which involves attaching new habits to existing ones, thereby leveraging our existing routines to build new, beneficial behaviors.
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
                                            <Link className="pub-link" to="/books/book11" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                                                <span className="d-flex">
                                                    <span className="child">
                                                        James Clear
                                                    </span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Release Date</span>
                                            <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>16 October 2018</span>
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
                                                    <img loading='lazy' src={atomic} alt="The atomic habits book thumbnail" />
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
