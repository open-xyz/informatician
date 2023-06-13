import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import abk1 from "../../../assets/audiobks/abk1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function SingleBk() {
  return (
    <div className="single-view">
      <div className="container-fluid">
        <div className="row">
          <div className="single">
            <div className="inside-wrapper">
              <div className="space hide"></div>
              <div className="left-wrapper-content">
                <div className="first-section">
                  <span className="first-type">Audiobook</span>
                </div>
                <h1 className="bk-name">The Last Mrs Parrish</h1>
                <div className="publication">
                  <p className="pub-name">
                    By
                    <Link
                      className="pub-link"
                      to="/books/book1"
                      style={{ marginLeft: "5px" }}
                    >
                      <span className="d-flex">
                        <span className="child">
                          Lynne Constantine and Valerie Constantine
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
                    <Link className="pub-link" to="/books/book1">
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
                  <h2 className="abt-bk">About this Book</h2>
                  <div style={{ marginTop: "8px", fontSize: "1rem" }}>
                    <div className="theory">
                      <p>
                        <strong>
                          <em>International Bestseller </em>
                          THE INTERNATIONAL BESTSELLER AND DECEMBER PICK FOR
                          REESE WITHERSPOON'S HELLO SUNSHINE BOOK CLUB Featuring
                          a sneak peek at Liv Constantine’s second novel, THE
                          LAST TIME I SAW YOU "Filled with envy, deception, and
                          power, it’s a great reading escape. And there is a
                          thrilling twist at the end!!" —Reese Witherspoon “Will
                          keep you up. In a ‘can’t put it down’ way. It’s ‘The
                          Talented Mr. Ripley’ with XX chromosomes.”—The Skimm
                        </strong>
                      </p>{" "}
                      <br />
                      <p>
                        A REESE WITHERSPOON HELLO SUNSHINE BOOK CLUB PICK WITH
                        OVER ONE MILLION COPIES SOLD! "Filled with envy,
                        deception, and power, it’s a great reading escape. And
                        there is a thrilling twist at the end!!" —Reese
                        Witherspoon “Will keep you up. In a ‘can’t put it down’
                        way. It’s ‘The Talented Mr. Ripley’ with XX
                        chromosomes.”—The Skimm “Deliciously duplicitous. . . .
                        equally as twisty, spellbinding, and addictive as
                        Gillian Flynn’s Gone Girl or Paula Hawkins’s The Girl on
                        the Train.”—Library Journal (starred review) Amber
                        Patterson is fed up. She’s tired of being a nobody: a
                        plain, invisible woman who blends into the background.
                        She deserves more—a life of money and power like the one
                        blond-haired, blue-eyed goddess Daphne Parrish takes for
                        granted. To everyone in the exclusive town of Bishops
                        Harbor, Connecticut, Daphne—a socialite and
                        philanthropist—and her real-estate mogul husband,
                        Jackson, are a couple straight out of a fairy tale.
                        Amber’s envy could eat her alive . . . if she didn't
                        have a plan. Amber uses Daphne’s compassion and caring
                        to insinuate herself into the family’s life—the first
                        step in a meticulous scheme to undermine her. Before
                        long, Amber is Daphne’s closest confidante, traveling to
                        Europe with the Parrishes and their lovely young
                        daughters, and growing closer to Jackson. But a skeleton
                        from her past may undermine everything that Amber has
                        worked towards, and if it is discovered, her well-laid
                        plan may fall to pieces. With shocking turns and dark
                        secrets that will keep you guessing until the very end,
                        The Last Mrs. Parrish is a fresh, juicy, and utterly
                        addictive thriller from a diabolically imaginative
                        talent.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "40px" }}>
                  <div className="bk-desc">
                    <div className="lang">
                      <span className="first-lang">Language</span>
                      <span className="second-lang">English</span>
                    </div>
                    <div className="lang">
                      <span className="first-lang">Publisher</span>
                      <Link className="pub-link" to="/books/book1">
                        <span className="d-flex">
                          <span className="child">
                            Lynne Constantine and Valerie Constantine
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="lang">
                      <span className="first-lang">Release Date</span>
                      <span className="second-lang">Oct 17, 2017</span>
                    </div>
                    <div className="lang">
                      <span className="first-lang">ISBN</span>
                      <span className="second-lang">9780718074326</span>
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
                          <img src={abk1} alt="" />
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
                                icon={faBookmark}
                                style={{ height: "24px" }}
                              />
                            </div>
                            <div className="label">Save for later</div>
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
