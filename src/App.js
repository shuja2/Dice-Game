import { useState } from "react";
import Landing_page from "./landing_page";
import Playing from "./Playing";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(0);
  const [randomNum, setRandomNum] = useState(2);

  const [score, setScore] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const [level, setLevel] = useState(1);
  function handle_play() {
    setisPlaying(!isPlaying);
  }
  return (
    <>
      {isPlaying ? (
        <Playing
          score={score}
          setScore={setScore}
          selected={selected}
          setSelected={setSelected}
          randomNum={randomNum}
          setRandomNum={setRandomNum}
          randomGen={randomGen}
          level={level}
          setLevel={setLevel}
        />
      ) : (
        <Landing_page
          handle_play={handle_play}
          level={level}
          setLevel={setLevel}
        />
      )}
    </>
  );
}
const randomGen = (min, max, lev, selected) => {
  let dec = rand_bool();
  console.log(`bool: ${dec}`);

  if (lev == 1) {
    if (dec == 0 && selected + 1 < 7) {
      min = selected;
      max = selected + 1;
    } else if (dec == 0 && selected - 1 > 0) {
      min = selected - 1;
      max = selected;
    } else if (dec == 1 && selected - 1 > 0) {
      min = selected - 1;
      max = selected;
    } else if (dec == 1 && selected + 1 < 7) {
      min = selected;
      max = selected + 1;
    }
  } else if (lev == 2) {
    if (dec && selected + 2 < 7) {
      min = selected - 1 > 0 ? selected - 1 : selected;
      max = selected + 2;
    } else if (dec && selected - 2 > 0) {
      min = selected - 2;
      max = selected + 1 < 7 ? selected + 1 : selected;
    } else if (!dec && selected - 2 > 0) {
      min = selected - 2;
      max = selected + 1 < 7 ? selected + 1 : selected;
    } else if (!dec && selected + 2 < 7) {
      min = selected - 1 > 0 ? selected - 1 : selected;
      max = selected + 2;
    }
  } else if (lev == 3) {
    min = 1;
    max = 6;
  }
  console.log(`min: ${min} , max:${max}`);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function rand_bool() {
  return Math.floor(Math.random() * 2);
}
// for (let index = 0; index < 15; index++) {
//   console.log(`${Math.floor(Math.random()*2)}   : ${rand_bool()}` );

// }
// console.log();
export default App;
