import { TextField, Modal, Button, Stack } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "space-evenly",
  color: "yellow",
};

const SaveTime = (props) => {
  const { time, open, toggleModal, setFetchTimes } = props;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(() => e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    //formating time as a string so it matches db
    const timeString = `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${(
      "0" + Math.floor((time / 1000) % 60)
    ).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`;

    await fetch("http://localhost:5000/api/stopwatch/", {
      method: "POST",
      body: JSON.stringify({ note: input, time: timeString }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    toggleModal(false);
    setFetchTimes(true);
  };

  return (
    <Modal open={open} onClose={() => toggleModal(false)}>
      <Stack direction="row" sx={style}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          color="warning"
          value={input.note}
          name="note"
          onChange={handleChange}
          focused
        ></TextField>

        <Button variant="contained" color="warning" onClick={handleSave}>
          Save
        </Button>
      </Stack>
    </Modal>
  );
};

export default SaveTime;
