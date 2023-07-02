import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import ebk6 from "../../../assets/ebooks/ebk6.webp";
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
                  <span className="first-type" style={{ color: props.theme === "dark" ? 'white' : '' }}>Ebook</span>
                </div>
                <h1 className="bk-name">
                  Vanderbilt: The Rise and Fall of an American Dynasty
                </h1>
                <div className="publication">
                  <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                    By
                    <Link
                      className="pub-link"
                      to="/books/book9"
                      style={{ marginLeft: "5px", color: props.theme === "dark" ? 'white' : '' }}
                    >
                      <span className="d-flex">
                        <span className="child">
                          Anderson Cooper, Katherine Howe
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
                    <Link className="pub-link" to="/books/book9" style={{ color: props.theme === "dark" ? 'white' : '' }}>
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
                          <em>New York Times </em>
                          bestselling author and journalist Anderson Cooper
                          teams with New York Times bestselling historian and
                          novelist Katherine Howe to chronicle the rise and fall
                          of a legendary American dynasty—his mother’s family,
                          the Vanderbilts.{" "}
                        </strong>
                      </p>{" "}
                      <br />
                      <p>
                        One of the Washington Post's Notable Works of Nonfiction
                        of 2021When eleven-year-old Cornelius Vanderbilt began
                        to work on his father’s small boat ferrying supplies in
                        New York Harbor at the beginning of the nineteenth
                        century, no one could have imagined that one day he
                        would, through ruthlessness, cunning, and a pathological
                        desire for money, build two empires—one in shipping and
                        another in railroads—that would make him the richest man
                        in America. His staggering fortune was fought over by
                        his heirs after his death in 1877, sowing familial
                        discord that would never fully heal. Though his son
                        Billy doubled the money left by “the Commodore,”
                        subsequent generations competed to find new and ever
                        more extraordinary ways of spending it. By 2018, when
                        the last Vanderbilt was forced out of The Breakers—the
                        seventy-room summer estate in Newport, Rhode Island,
                        that Cornelius’s grandson and namesake had built—the
                        family would have been unrecognizable to the tycoon who
                        started it all.Now, the Commodore’s
                        great-great-great-grandson Anderson Cooper, joins with
                        historian Katherine Howe to explore the story of his
                        legendary family and their outsized influence. Cooper
                        and Howe breathe life into the ancestors who built the
                        family’s empire, basked in the Commodore’s wealth,
                        hosted lavish galas, and became synonymous with
                        unfettered American capitalism and high society.
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
                      <Link className="pub-link" to="/books/book9" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                        <span className="d-flex">
                          <span className="child">
                            Anderson Cooper, Katherine Howe
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
                          <img loading='lazy' src={ebk6} alt="Vanderbilt" />
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
