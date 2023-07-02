import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import ebk4 from "../../../assets/ebooks/ebk4.webp";
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
                  <span className="first-type"  style={{ color: props.theme === "dark" ? 'white' : '' }}>Ebook</span>
                </div>
                <h1 className="bk-name">
                  Everything Is F*cked: A Book About Hope
                </h1>
                <div className="publication">
                  <p className="pub-name" style={{ color: props.theme === "dark" ? 'white' : '' }}>
                    By
                    <Link
                      style={{ color: props.theme === "dark" ? 'white' : '', marginLeft: "5px" }}
                      className="pub-link"
                      to="/books/book7"
                    >
                      <span className="d-flex">
                        <span className="child">Mark Manson</span>
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
                    <Link className="pub-link" to="/books/book7" style={{ color: props.theme === "dark" ? 'white' : '' }}>
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
                          <em>NEW YORK TIMES BESTSELLER</em>
                          From the author of the international mega-bestseller
                          The Subtle Art of Not Giving A F*ck comes a
                          counterintuitive guide to the problems of hope.{" "}
                        </strong>
                      </p>{" "}
                      <br />
                      <p>
                        We live in an interesting time. Materially, everything
                        is the best it’s ever been—we are freer, healthier and
                        wealthier than any people in human history. Yet, somehow
                        everything seems to be irreparably and horribly
                        f*cked—the planet is warming, governments are failing,
                        economies are collapsing, and everyone is perpetually
                        offended on Twitter. At this moment in history, when we
                        have access to technology, education and communication
                        our ancestors couldn’t even dream of, so many of us come
                        back to an overriding feeling of hopelessness. What’s
                        going on? If anyone can put a name to our current
                        malaise and help fix it, it’s Mark Manson. In 2016,
                        Manson published The Subtle Art of Not Giving A F*ck, a
                        book that brilliantly gave shape to the ever-present,
                        low-level hum of anxiety that permeates modern living.
                        He showed us that technology had made it too easy to
                        care about the wrong things, that our culture had
                        convinced us that the world owed us something when it
                        didn’t—and worst of all, that our modern and maddening
                        urge to always find happiness only served to make us
                        unhappier. Instead, the “subtle art” of that title
                        turned out to be a bold challenge: to choose your
                        struggle; to narrow and focus and find the pain you want
                        to sustain. The result was a book that became an
                        international phenomenon, selling millions of copies
                        worldwide while becoming the #1 bestseller in 13
                        different countries.
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
                      <Link className="pub-link" to="/books/book7">
                        <span className="d-flex">
                          <span className="child" style={{ color: props.theme === "dark" ? 'white' : '' }}>Mark Manson</span>
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
                          <img loading='lazy' src={ebk4} alt="Everything Is F*cked book thumbnail" />
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
