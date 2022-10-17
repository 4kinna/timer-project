import { useState, useRef } from "react";


const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTime((time) => time + 10)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
  setIsActive(false)
  setIsPaused(false)
  setTime(0)
  }

  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTime((time) => time + 10)
    }, 1000)
  }

  return (
    <div>
      <label>TIMER</label>
      <h1>
        <span className="hour">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="min">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="sec">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h1>

      <div className="buttons">
      {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
        <button>Stop ?? </button>
        <button onClick={handleReset} >Reset</button>
        </div>


    </div>
  );
};

export default Timer;
