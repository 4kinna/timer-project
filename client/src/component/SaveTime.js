import { useState } from "react";

import * as React from "react";
import { TextField, Modal, Box, Button, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SaveTime = (props) => {
  const { time, open, toggleModal, setFetchTimes } = props;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(() => e.target.value);
  };

  const handelSave = async (e) => {
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
      <Stack spacing={2} alignItems="center">
        <Box sx={style}>
          <TextField
            id="standard-basic"
            variant="standard"
            value={input.note}
            name="note"
            onChange={handleChange}
          ></TextField>

          <Button variant="contained" color="primary" onClick={handelSave}>
            Save note
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
};

export default SaveTime;
