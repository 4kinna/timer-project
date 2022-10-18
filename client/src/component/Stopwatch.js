import { useState, useRef } from "react";
import Buttons from "./Buttons";
import Time from "./Time";
import SaveTime from "./SaveTime";
import TimePosts from "./posts/TimePosts";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Button } from "@mui/material";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  const toggleModal = (toggleVal) => {
    if (toggleVal) {
      // if we are opening the modal to save timer time with note we want to pause the timer
      handlePause();
    }
    setModalOpen(toggleVal);
  };

  return (
    <div>
      <label>TIMER</label>
      <Time time={time} />
      <Buttons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleResume={handleResume}
        handleReset={handleReset}
      />
      <Button>
        <SaveAltIcon onClick={() => toggleModal(true)} />
      </Button>

      <SaveTime time={time} open={modalOpen} toggleModal={toggleModal} />

      <TimePosts />
    </div>
  );
};

export default Stopwatch;
