import React from "react";

const Landing_page = ({handle_play,level, setLevel}) => {
  return (
    <main>
      <div className="land_div">
        <div className="dices">
          <img src="/images/dices.png" alt="dices" />
        </div>
        <div className="inf_btn">
          <h1 id="name">Dice Game</h1>
          <div id="line"></div>
          <label htmlFor="mode_select" id="label">Select Difficulty level:</label>
          <select name="mode_select" id="mode_select" onChange={(e)=>{setLevel(e.target.value);console.log(e.target.value);
          }} value={level}>
            <option value="1">Easy</option>
            <option value="2">Normal</option>
            <option value="3">Difficult</option>
          </select>
          <button id="play_btn" onClick={handle_play}>Play Now</button>
        </div>
      </div>
    </main>
  );
};

export default Landing_page;
