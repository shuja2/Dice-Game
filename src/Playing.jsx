import React from "react";
let numbers = [1, 2, 3, 4, 5, 6];

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
  const handleRolling = () => {
    // Simulate a rolling animation
    if (selected < 1 || selected > 6) {
      document.getElementById("not_selected").style.display = "block";
      setSelected()
      return;
    }
    document.getElementById("not_selected").style.display = "none";
    const dice = document.getElementById("dic");
    dice.classList.add("rolling");

    let rand = randomGen(1, 6, level, selected);

    setTimeout(() => {
      setRandomNum(rand);
      if (rand === selected) {
        setScore(() => score + selected);
      } else {
        setScore(() => score - 2);
      }
      setSelected(-1);
    }, 550);
    setTimeout(() => {
      dice.classList.remove("rolling");
    }, 800); // Adjust the duration as needed
    // console.log(randomNum);
  };
  const handleReset = () => {
    //  confirm("Are you sure to reset your Score: ");
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to reset your Score: ")) {
      setScore(0);
    }
  };
  // document.onkeyup((e)=>{console.log(e.key);})
  window.addEventListener("keyup" , (e)=>{
    
    if (e.key>0 && e.key<7) {
      console.log(e.key);
      setSelected(parseInt(e.key));
    }
    else if (e.key === "Enter"){
      if (selected > 0 && selected < 7) {
        handleRolling();
        setSelected(-1);
        console.log(`${e.key} : ${selected}`);
      }

    }
  });
  return (
    <main>
      <div className="top">
        <div className="score">
          <h1 id="tot-score">{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="level_selector">
          <select disabled={score!=0}
            name="mode_select"
            id="mode_select"
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
          <p>Level</p>
        </div>
        <div className="num_selector">
          <div className="not_selected" id="not_selected">
            Error! no number selected.
          </div>
          <div className="nums">
            {numbers.map((value, index) => (
              <p
                key={index} // Important for performance optimization
                className={`num ${selected === value ? "selected" : ""}`}
                onClick={() => setSelected(value)}
              >
                {value}
              </p>
            ))}
          </div>
          <div className="text">Select a Number</div>
        </div>
      </div>
      <div className="center">
        <div className="dice">
          <img
            id="dic"
            src={`./images/dice_${randomNum}.png`}
            alt="Dice 1"
            onClick={handleRolling}
          />
          <p>Click on dice to roll it.</p>
        </div>
        <div className="btns">
          <div>
            <button id="reset" onClick={handleReset}>
              Reset Score
            </button>
          </div>
          <div>
            <button id="rules-btn" onClick={handleShowRules}>
              Show Rules
            </button>
          </div>
        </div>
      </div>
      <div className="bottom" id="bottom">
        <h2>How to play dice game</h2>
        <ul id="rules">
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>If you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </main>
  );
};
const handleShowRules = () => {
  let ele = document.getElementById("bottom");
  // ele.style.display == "none" ? ele.style.display = "block":ele.style.display = "none";
  if (ele.style.display == "none") {
    ele.style.display = "block";
    document.getElementById("rules-btn").innerText = "Hide Rules";
  } else {
    ele.style.display = "none";
    document.getElementById("rules-btn").innerText = "Show Rules";
  }
};
let prev_target = null;
// const handleSelect = (ev) =>{
//   if(prev_target){
//     prev_target.classList.remove('selected');
//   }
//   prev_target=ev.target;

//   ev.target.classList.add('selected');

// }

export default Playing;
