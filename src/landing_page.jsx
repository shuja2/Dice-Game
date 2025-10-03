import React from "react";

const LandingPage = ({ handle_play, level, setLevel }) => {
  return (
    <main className="landing-main">
      <div className="landing-container">
        <div className="dices-container">
          <img
            src="./images/dices.png"
            alt="Dice illustration"
            className="dices-image"
          />
        </div>
        <div className="info-button-container">
          <h1 className="game-title">Dice Game</h1>
          <div className="divider"></div>
          <label htmlFor="difficulty-select" className="difficulty-label">
            Select Difficulty Level:
          </label>
          <select
            name="difficulty"
            id="difficulty-select"
            className="difficulty-select"
            onChange={(e) => {
              setLevel(e.target.value);
              console.log(e.target.value);
            }}
            value={level}
          >
            <option value="1">Easy</option>
            <option value="2">Normal</option>
            <option value="3">Difficult</option>
          </select>
          <button className="play-button" onClick={handle_play}>
            Play Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;