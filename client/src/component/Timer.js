import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

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
    </div>
  );
};

export default Timer;
