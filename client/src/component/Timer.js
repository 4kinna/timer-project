import { useState, useRef } from "react";
import Time from "./Time.js";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 1000);
  };

  return (
    <div>
      <label>TIMER</label>
      <Time time={time} />
      <div className="buttons">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button>Stop ?? </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
