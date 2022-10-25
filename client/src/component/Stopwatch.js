import { useState, useRef } from "react";
import Buttons from "./Buttons";
import Time from "./Time";
import SaveTime from "./SaveTime";
import TimePosts from "./posts/TimePosts";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchTimes, setFetchTimes] = useState(true);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
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
    }, 10);
  };

  const handleToggle = () => {
    toggleModal(true);
  };

  const toggleModal = (toggleVal) => {
    if (toggleVal) {
      // if we are opening the modal to save timer time with note we want to pause the timer
      handlePause();
    }
    setModalOpen(toggleVal);
  };

  return (
    <div>
      <label>STOPWATCH</label>
      <Time time={time} />
      <Buttons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleResume={handleResume}
        handleReset={handleReset}
        handleToggle={handleToggle}
      />

      <SaveTime
        setFetchTimes={setFetchTimes}
        time={time}
        open={modalOpen}
        toggleModal={toggleModal}
      />

      <TimePosts fetchTimes={fetchTimes} setFetchTimes={setFetchTimes} />
    </div>
  );
};

export default Stopwatch;
