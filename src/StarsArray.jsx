import React, { useState } from "react";
import Star from "./Star";
function StarsArray() {
  const [selected_, setselected_] = useState(2);
  const HandleClick = (indexx) => {
    setselected_(indexx + 1);
  };
  let arr = [];
  for (let index = 0; index < 5; index++) {
    arr.push(
      <div
        onClick={() => {
          HandleClick(index);
        }}
      >
        <Star key={index} selected={selected_ > index} />
      </div>
    );
  }
  arr.push(<div id="ss"><p> You gave {selected_} stars</p></div>);
  return arr;
}

export default StarsArray;
