import React, { useState } from "react";
import "./ReadingChallenge.css";

const ReadingChallenge = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("");
  const [booksRead, setBooksRead] = useState(0);
  const [score, setScore] = useState(0);
  const [goal, setGoal] = useState(10);

  const handleIncrement = () => {
    setBooksRead((prevBooksRead) => prevBooksRead + 1);
  };

  const handleDecrement = () => {
    setBooksRead((prevBooksRead) => prevBooksRead - 1);
  };

  const handleGoalChange = (event) => {
    setGoal(parseInt(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddBook = () => {
    if (category !== "") {
      setBooks((prevBooks) => [...prevBooks, { category }]);
      setCategory("");
      setScore((prevScore) => prevScore + 1);
    }
  };

  const calculateProgress = () => {
    return Math.floor((booksRead / goal) * 100);
  };

  return (
    <div className="reading-challenge-container">
      <h1>READING CHALLENGE</h1>
      <div className="reading-stats">
        <div className="books-read">
          <h2>Books Read</h2>
          <button
            className="decrement-button"
            onClick={handleDecrement}
            disabled={booksRead === 0}
          >
            -
          </button>
          <span className="books-read-count">{booksRead}</span>
          <button className="increment-button" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="reading-goal">
          <h2>Reading Goal</h2>
          <input
            type="number"
            value={goal}
            onChange={handleGoalChange}
            min={1}
            max={10000}
          />
        </div>
        <div className="reading-progress">
          <h2>Reading Progress</h2>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <span className="progress-percentage">{calculateProgress()}%</span>
        </div>
      </div>
      <div className="book-form">
        <h2>Add Book</h2>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
          />
        </label>
        <button onClick={handleAddBook}>Add</button>
      </div>
      <div className="book-list">
        <h2>Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.category}</li>
          ))}
        </ul>
      </div>
      <div className="score">
        <h2>Score</h2>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default ReadingChallenge;
