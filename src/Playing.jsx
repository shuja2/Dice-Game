import React, { useEffect, useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6];

const Playing = ({
  score,
  setScore,
  selected,
  setSelected,
  randomNum,
  setRandomNum,
  randomGen,
  level,
  setLevel,
}) => {
  const [show_rules, setShow_rules] = useState(0);
  const [show_error, setShow_error] = useState(0);

  const handleRolling = () => {
    if (!selected || selected < 1 || selected > 6) {
      setShow_error(1);
      return;
    }
    setShow_error(0);
    const dice = document.getElementById("dice-image");
    dice.classList.add("rolling");

    const rand = randomGen(1, 6, level, selected);
    // Update dice face and score during animation
    setTimeout(() => {
      setRandomNum(rand);
      setScore(score + (rand === selected ? selected : -2));
      setSelected(null);
    }, 500);
    // Remove rolling class after animation
    setTimeout(() => {
      dice.classList.remove("rolling");
    }, 1000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your score?")) {
      setScore(0);
      setSelected(null);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 6) {
        setSelected(num);
      } else if (e.key === "Enter" && selected >= 1 && selected <= 6) {
        handleRolling();
      }
    };

    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [selected, handleRolling]);

  return (
    <main className="playing-main">
      <div className="top-section">
        {/* <hr className="li"/>
       <hr className="lin"/> */}
        <div className="score-container">
          <h1 className="score-value">{score}</h1>
          <p className="score-label">Total Score</p>
        </div>
        <div className="level-selector">
          <select
            name="difficulty"
            id="difficulty-select"
            className="difficulty-select-"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            disabled={score !== 0}
          >
            <option value="1">Easy</option>
            <option value="2">Normal</option>
            <option value="3">Difficult</option>
          </select>
          <p className="level-label">Level</p>
        </div>
        <div className="number-selector">
          <span
            className="error-message"
            id="error-message"
            style={{ visibility: show_error == 1 ? "visible" : "hidden" }}
          >
            Please select a number!
          </span>
          <div className="numbers-container">
            {numbers.map((value) => (
              <button
                key={value}
                className={`number ${selected === value ? "selected" : ""}`}
                onClick={() => setSelected(value)}
                aria-pressed={selected === value}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="select-text">Select a Number</p>
        </div>
      </div>
      <div className="center-section">
        <div className="dice-container">
          <img
            id="dice-image"
            src={`./images/dice_${randomNum}.png`}
            alt={`Dice showing ${randomNum}`}
            onClick={handleRolling}
            className="dice-image"
          />
          <p className="dice-instruction">Click on dice to roll it</p>
        </div>
        <div className="buttons-container">
          <button
            id="reset-button"
            className="reset-button"
            onClick={handleReset}
          >
            Reset Score
          </button>
          <button
            id="rules-button"
            className="rules-button"
            onClick={() => setShow_rules((prev) => !prev)}
          >
            {show_rules ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
      </div>{" "}
      {!!show_rules ? (
        <div className="rules-section" id="rules-section">
          <>
            <h2 className="rules-title">How to Play the Dice Game</h2>
            <ul className="rules-list">
              <li>Select any number</li>
              <li>Click on the dice image</li>
              <li>
                If the selected number matches the dice number, you earn points
                equal to the dice value
              </li>
              <li>An incorrect guess deducts 2 points</li>
            </ul>
          </>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Playing;
