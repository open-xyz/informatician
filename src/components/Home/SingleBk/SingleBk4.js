import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import abk4 from "../../../assets/audiobks/abk4.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function SingleBk(props) {

  function handleClick(){
    setBookmarks(bookmarks)
    setColor("aqua")
  }

  const[bookmarks, setBookmarks] = useState([]);
  const[color, setColor] = useState("white");

  return (
    <div className="single-view">
      <div className="container-fluid">
        <div className="row">
          <div className="single">
            <div className="inside-wrapper">
              <div className="space hide"></div>
              <div className="left-wrapper-content">
                <div className="first-section">
                  <span className="first-type" style={{ color: props.theme === "dark" ? 'white' : '' }}>Audiobook</span>
                </div>
                <h1 className="bk-name">
                  Building a StoryBrand: Clarify Your Message So Customers Will
                  Listen
                </h1>
                <div className="publication">
                  <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                    By
                    <Link
                      style={{ color: props.theme === "dark" ? 'white' : '', marginLeft: "5px" }}
                      className="pub-link"
                      to="/books/book4"
                    >
                      <span className="d-flex">
                        <span className="child">
                          HarperCollins Leadership Audio
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
                    <Link className="pub-link" to="/books/book4" style={{ color: props.theme === "dark" ? 'white' : '' }}>
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
                  <h2 className="abt-bk" style={{ color: props.theme === "dark" ? 'white' : '' }}>About this Book</h2>
                  <div style={{ marginTop: "8px", fontSize: "1rem" }}>
                    <div className="theory">
                      <p>
                        <strong>
                          <em>New York Times </em>
                          bestselling author Donald Miller uses the seven
                          universal elements of powerful stories to teach
                          readers how to dramatically improve how they connect
                          with customers and grow their businesses.
                        </strong>
                      </p>{" "}
                      <br />
                      <p>
                        Donald Miller’s StoryBrand process is a proven solution
                        to the struggle business leaders face when talking about
                        their businesses. This revolutionary method for
                        connecting with customers provides readers with the
                        ultimate competitive advantage, revealing the secret for
                        helping their customers understand the compelling
                        benefits of using their products, ideas, or services.
                        <em>Building a StoryBrand </em>
                        does this by teaching readers the seven universal story
                        points all humans respond to; the real reason customers
                        make purchases; how to simplify a brand message so
                        people understand it; and how to create the most
                        effective messaging for websites, brochures, and social
                        media. Whether you are the marketing director of a
                        multibillion dollar company, the owner of a small
                        business, a politician running for office, or the lead
                        singer of a rock band,
                        <em>Building a StoryBrand </em>
                        will forever transform the way you talk about who you
                        are, what you do, and the unique value you bring to your
                        customers.
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
                      <Link className="pub-link" to="/books/book4" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                        <span className="d-flex">
                          <span className="child">
                            HarperCollins Leadership Audio
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="lang">
                      <span className="first-lang">Release Date</span>
                      <span className="second-lang" style={{ color: props.theme === "dark" ? 'white' : '' }}>Oct 17, 2001</span>
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
                          <img src={abk4} alt="Building a StoryBrand" />
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
                                onClick={() => {handleClick()}}
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
