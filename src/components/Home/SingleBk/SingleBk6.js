import { Link } from "react-router-dom";
import "./SingleBk.css";
import ReactStars from "react-rating-stars-component";
import ebk3 from "../../../assets/ebooks/ebk3.webp";
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
                                    <span className="first-type">Ebook</span>
                                </div>
                                <h1 className="bk-name">Never Split the Difference: Negotiating As If Your Life Depended On</h1>
                                <div className="publication">
                                    <p className="pub-name">
                                        By
                                        <Link className="pub-link" to="/books/book6" style={{ marginLeft: '5px' }}>
                                            <span className="d-flex">
                                                <span className="child">Chris Voss,Tahl Raz </span>
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
                                            activeColor="#ffd700" />
                                    </div>
                                    <p className="rating-count">
                                        <Link className="pub-link" to="/books/book6">
                                            <span className="d-flex">
                                                <span className="child">
                                                    (1,103 ratings)
                                                </span>
                                            </span>
                                        </Link>

                                    </p>
                                </div>
                                <span>
                                    <div className="d-block" style={{ height: '29px', marginBottom: '24px' }}></div>
                                </span>
                                <div style={{ marginBottom: '56px' }}>
                                    <h2 className="abt-bk">About this Book</h2>
                                    <div style={{ marginTop: '8px', fontSize: '1rem' }}>
                                        <div className="theory">
                                            <p>
                                                <strong>
                                                    <em>A Wall Street Journal Bestseller </em>
                                                    Life is a series of negotiations you should be prepared for: buying a car; negotiating a pay hike; buying a home; renegotiating rent; deliberating with your partner. Taking emotional intelligence and intuition to the next level, Never Split the Difference by Chris Voss and Tahl Raz aims to give you the competitive edge in any discussion.                                                </strong>
                                            </p> <br />
                                            <p>
                                            A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home.

After a stint policing the rough streets of Kansas City, Missouri, Chris Voss joined the FBI, where his career as a hostage negotiator brought him face-to-face with a range of criminals, including bank robbers and terrorists. Reaching the pinnacle of his profession, he became the FBI’s lead international kidnapping negotiator. Never Split the Difference takes you inside the world of high-stakes negotiations and into Voss’s head, revealing the skills that helped him and his colleagues succeed where it mattered most: saving lives. In this practical guide, he shares the nine effective principles—counterintuitive tactics and strategies—you too can use to become more persuasive in both your professional and personal life.

Life is a series of negotiations you should be prepared for: buying a car, negotiating a salary, buying a home, renegotiating rent, deliberating with your partner. Taking emotional intelligence and intuition to the next level, Never Split the Difference gives you the competitive edge in any discussion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '40px' }}>
                                    <div className="bk-desc">
                                        <div className="lang">
                                            <span className="first-lang">Language</span>
                                            <span className="second-lang">English</span>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Publisher</span>
                                            <Link className="pub-link" to="/books/book6">
                                                <span className="d-flex">
                                                    <span className="child">Chris Voss,Tahl Raz</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="lang">
                                            <span className="first-lang">Release Date</span>
                                            <span className="second-lang">Oct 17, 2001</span>
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
                                    <div style={{ marginBottom: '24px' }}>
                                        <div>
                                            <div className="book-box">
                                                <div className="thumbnail">
                                                    <img src={ebk3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '16px' }}>
                                        <button type="button" class="btn btn-outline-success" style={{ backgroundColor: "#1e7b85", color: "white", width: '100%', marginBottom: '12px', fontWeight: 600 }}>Start Reading</button>
                                        <button type="button" class="btn btn-outline-success" style={{ width: '100%', marginBottom: '12px', fontWeight: 600 }}>Sample</button>
                                    </div>
                                    <div className="right-last">
                                        <ul className="right-list">
                                            <li>
                                                <button>
                                                    <div style={{ display: 'flex', maxWidth: '190px' }}>
                                                        <div>
                                                            <FontAwesomeIcon icon={faBookmark} style={{height: '24px'}} />
                                                        </div>
                                                        <div className="label">
                                                            Save for later
                                                        </div>
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
    )
}