import React, { useEffect } from "react";
import "./GenreDetails.css";
import biography from '../../assets/Genre/biography.webp'
import romance from '../../assets/Genre/romance.webp'
import thriller from '../../assets/Genre/thriller.webp'
import horror from '../../assets/Genre/horror.webp'
import science from '../../assets/Genre/science.webp'
import mystery from '../../assets/Genre/mystery.webp'
import "aos/dist/aos.css";
import AOS from "aos";
import './GenreDetails.css'

const GenreDetails = (props) => {

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="book-formats-container" style={{ marginTop: 100 }}>
            <h1 className="text-7xl font-bold">Explore Genres</h1>
            <div className='w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card'
                style={{ boxShadow: props.theme === 'dark' ? 'rgb(77 85 93) 0px 15px 30px 1px' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px' }}
            >
                <div className="" data-aos="fade-right" data-aos-duration="500">
                    <img loading='lazy' src={mystery} className="team-member-image" alt="a group of books on a purple background" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-left" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Mystery</h1>
                    <p className="team-description font-bold">
                        The Mystery genre keeps readers on the edge of their seats with its suspenseful narratives and captivating plot twists. It revolves around solving perplexing crimes, untangling intricate puzzles, and uncovering hidden secrets. Mystery books often feature clever detectives or ordinary individuals thrust into extraordinary situations, challenging them to use their intellect and intuition to solve the mystery. Readers are drawn into a web of suspense, eagerly following the clues and unexpected turns that lead to a thrilling revelation. It's a genre that keeps readers guessing until the very end.<br></br>
                        <u >Top 3 Books:</u><br></br>
                        1. "Gone Girl" by Gillian Flynn <br></br>
                        2. "The Girl with the Dragon Tattoo" by Stieg Larsson<br></br>
                        3. "The Da Vinci Code" by Dan Brown<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
            </div>

            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card"
                style={{ boxShadow: props.theme === 'dark' ? 'rgb(77 85 93) 0px 15px 30px 1px' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px' }}
            >
                <div className="md:w-1/2 mr-10" data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Romance</h1>
                    <p className="team-description font-bold">
                        Romance novels are known for their exploration of love, passion, and emotional connections between characters. They depict heartwarming and often tumultuous relationships that captivate readers and evoke a range of emotions. Romance stories transport readers into a world of desire, courtship, and the complexities of human relationships. Whether set in historical eras, contemporary times, or even fantastical realms, these books celebrate the power of love, showcasing the journey of characters as they navigate obstacles and discover true connection and happily ever afters.<br></br>
                        <u >Top 3 Books:</u><br></br>
                        1. "Pride and Prejudice" by Jane Austen<br></br>
                        2. "Outlander" by Diana Gabaldon<br></br>
                        3. "The Notebook" by Nicholas Sparks<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="500">
                    <img loading='lazy' src={romance} className="team-member-image" alt="a group of books on a violet background" />
                </div>
            </div>

            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card"
                style={{ boxShadow: props.theme === 'dark' ? 'rgb(77 85 93) 0px 15px 30px 1px' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px' }}
            >
                <div className="" data-aos="fade-right" data-aos-duration="500">
                    <img loading='lazy' src={science} className="team-member-image" alt="a stack of books on a table" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-left" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Science Fiction</h1>
                    <p className="team-description font-bold">
                        Science Fiction is a genre that takes readers beyond the realm of reality, offering imaginative and futuristic narratives. It explores speculative ideas, advanced technology, and the impact of scientific advancements on society and individuals. Science Fiction books transport readers to distant galaxies, alternate realities, and dystopian worlds, pushing the boundaries of human imagination. They delve into themes such as space exploration, time travel, artificial intelligence, and the potential consequences of scientific progress. Science Fiction captivates readers by posing thought-provoking questions and immersing them in imaginative and thoughtfully crafted universes.<br></br>
                        <u >Top 3 Books:</u><br></br>
                        1. "Dune" by Frank Herbert<br></br>
                        2. "1984" by George Orwell<br></br>
                        3. "Ender's Game" by Orson Scott Card <br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
            </div>
            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card"
                style={{ boxShadow: props.theme === 'dark' ? 'rgb(77 85 93) 0px 15px 30px 1px' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px' }}
            >
                <div className="md:w-1/2 mr-10" data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Thriller</h1>
                    <p className="team-description font-bold">
                        The Thriller genre is synonymous with gripping suspense, adrenaline-pumping action, and unexpected plot twists. These books keep readers on the edge of their seats, holding their breath as they follow characters caught in dangerous and high-stakes situations. Thrillers often involve elements of mystery, crime, espionage, or psychological suspense, keeping readers guessing and turning pages to uncover the truth. With their fast-paced narratives and nail-biting tension, thrillers offer an exhilarating reading experience, leaving readers craving more twists and turns.<br></br>
                        <u >Top 3 Books:</u><br></br>
                        1. "The Girl on the Train" by Paula Hawkins<br></br>
                        2. "The Da Vinci Code" by Dan Brown<br></br>
                        3. "The Silence of the Lambs" by Thomas Harris<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="500">
                    <img loading='lazy' src={thriller} className="team-member-image" alt="a group of books on a blue background" />
                </div>
            </div>
            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card"
                style={{ boxShadow: props.theme === 'dark' ? 'rgb(77 85 93) 0px 15px 30px 1px' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px' }}
            >
                <div className="" data-aos="fade-right" data-aos-duration="500">
                    <img loading='lazy' src={horror} className="team-member-image" alt="a collage of books" />
                </div>
                <div className="md:w-1/2 ml-5" data-aos="fade-left" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Horror</h1>
                    <p className="team-description font-bold">
                        Horror books aim to evoke fear and create a sense of dread in readers. They delve into the darkest corners of the human psyche, exploring supernatural entities, psychological terrors, and the macabre. Horror stories can be chilling, atmospheric, and filled with suspense, playing on our deepest fears and tapping into the unknown. From classic tales of vampires and ghosts to psychological thrillers that delve into the horrors of the mind, the Horror genre captivates readers by immersing them in a world of suspense, terror, and the unknown. It's a genre that elicits both a thrilling and spine-tingling experience for readers.<br></br>
                        <u >Top 3 Books:</u><br></br>
                        1. "Dracula" by Bram Stoker<br></br>
                        2. "The Shining" by Stephen King<br></br>
                        3. "The Exorcist" by William Peter Blatty<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
            </div>
            <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-4 mb-5 max-w-screen-2xl format-card"
                style={{ boxShadow: props.theme === 'dark' ? 'rgb(77 85 93) 0px 15px 30px 1px' : 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,rgba(0, 0, 0, 0.09) 0px 32px 16px' }}
            >
                <div className="md:w-1/2 mr-10" data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-5xl mb-7 font-bold">Biography</h1>
                    <p className="team-description font-bold">
                        Biography is a genre that offers a glimpse into the lives of real people, providing a captivating exploration of their experiences, achievements, and challenges. These books present a narrative account of an individual's life, offering valuable insights into their personal journey, contributions to society, and the impact they have made on the world. Biographies span a wide range of subjects, including renowned historical figures, cultural icons, political leaders, artists, scientists, and more.<br></br>
                        <u >Top 3 Books:</u><br></br>
                        1. "The Diary of a Young Girl" by Anne Frank<br></br>
                        2. "The Autobiography of Malcolm X" by Malcolm X and Alex Haley<br></br>
                        3. "Steve Jobs" by Walter Isaacson<br></br>
                        <br></br>
                        <div className="items-center">
                            <button>
                                <a className="submit-btn"> Explore more</a>
                            </button>
                        </div>
                    </p>
                </div>
                <div className="" data-aos="fade-left" data-aos-duration="500">
                    <img loading='lazy' src={biography} className="team-member-image" alt="a group of books on a green background" />
                </div>
            </div>
        </div>
    );
};

export default GenreDetails;
