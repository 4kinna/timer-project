import { useState, useRef } from "react";
import Buttons from "./Buttons";


const Timer = (props) => {

  return (
    <div>
      <label>TIMER</label>
      <h1>
        <span className="hour">
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="min">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="sec">{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
      </h1>

      
    </div>
  );
};

export default Timer;
