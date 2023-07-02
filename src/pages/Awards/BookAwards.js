import React, { useEffect } from "react";
import pulitzer from '../../assets/awards/pulitzer.webp'
import manbooker from '../../assets/awards/manbooker.webp'
import national from '../../assets/awards/national.webp'
import penFaulkner from '../../assets/awards/pen-faulkner.webp'
import womenprize from '../../assets/awards/womenprize.webp'
import "aos/dist/aos.css";
import AOS from "aos";
import './BookAwards.css'

const BookAwards = (props) => {

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="book-formats-container" style={{ marginTop: 100 }}>
            <h1 className="text-6xl font-bold">Book Awards</h1>
            <div className='w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card'>
                <div className="" data-aos="fade-right" data-aos-duration="500">
                    <img loading='lazy' src={pulitzer} className="team-member-image" alt="Pulitzer prize,a gold coin with a picture on it" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-left" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Pulitzer Prize</h1>
                    <p className="team-description font-bold">
                        The Pulitzer Prize is one of the most renowned literary awards, honoring excellence in various categories, including Fiction, Non-Fiction, and Poetry. This prestigious award recognizes exceptional works that display profound storytelling, masterful writing, and thought-provoking themes.wherever they go.<br></br>
                        <u >Some Winners:</u><br></br>
                        1. Fiction: "The Overstory" by Richard Powers<br></br>
                        2.Non-Fiction: "Evicted: Poverty and Profit in the American City" by Matthew Desmond<br></br>
                        3. Poetry: "The Tradition" by Jericho Brown<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
            </div>

            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card">
                <div className="md:w-1/2 mr-10" data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Man Booker Prize</h1>
                    <p className="team-description font-bold">
                        The Man Booker Prize is a highly regarded literary award presented annually for the best original novel written in English. It celebrates works that showcase exceptional writing, innovation, and exploration of new literary territories.<br></br>
                        <u >Some Winners:</u><br></br>
                        1. "The Testaments" by Margaret Atwood<br></br>
                        2. "Milkman" by Anna Burns<br></br>
                        3. "Lincoln in the Bardo" by George Saunders<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="500">
                    <img loading='lazy' src={manbooker} className="team-member-image" alt="a black rectangular object with text which says the man booker prize" />
                </div>
            </div>

            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card">
                <div className="" data-aos="fade-right" data-aos-duration="500">
                    <img loading='lazy' src={national} className="team-member-image" alt="a gold medal with a book and text which says national book award winner" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-left" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">National Book Award</h1>
                    <p className="team-description font-bold">
                        The National Book Award is an esteemed literary award that recognizes outstanding works in Fiction, Non-Fiction, Poetry, and Young People's Literature. It celebrates authors who push boundaries, offer fresh perspectives, and contribute to the richness of the literary landscape.<br></br>
                        <u >Some Winners:</u><br></br>
                        1. Fiction: "The Friend" by Sigrid Nunez<br></br>
                        2. Non-Fiction: "The New Negro: The Life of Alain Locke" by Jeffrey C. Stewart<br></br>
                        3. Poetry: "Indecency" by Justin Phillip Reed<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
            </div>
            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card">
                <div className="md:w-1/2 mr-10" data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">PEN/Faulkner Award for Fiction</h1>
                    <p className="team-description font-bold">
                        The PEN/Faulkner Award for Fiction is a prestigious literary prize that honors the best works of fiction by American authors. It recognizes novels that exhibit excellence in storytelling, character development, and language.<br></br>
                        <u >Some Winners:</u><br></br>
                        1. "Behold the Dreamers" by Imbolo Mbue<br></br>
                        2. "The Buddha in the Attic" by Julie Otsuka<br></br>
                        3. "The Great Man" by Kate Christensen<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="500">
                    <img loading='lazy' src={penFaulkner} className="team-member-image" alt="a black and white logo with a feather" />
                </div>
            </div>
            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card">
                <div className="" data-aos="fade-right" data-aos-duration="500">
                    <img loading='lazy' src={womenprize} className="team-member-image" alt="a statue of a person and text which says women's prize for fiction" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-left" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Women's Prize for Fiction</h1>
                    <p className="team-description font-bold">
                        The Women's Prize for Fiction, formerly known as the Orange Prize, celebrates exceptional novels written by women from all over the world. It aims to recognize and promote outstanding literary works that highlight women's voices and perspectives.<br></br>
                        <u >Some Winners:</u><br></br>
                        1. "An American Marriage" by Tayari Jones<br></br>
                        2. "Home Fire" by Kamila Shamsie<br></br>
                        3. "The Glorious Heresies" by Lisa McInerney<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookAwards;
