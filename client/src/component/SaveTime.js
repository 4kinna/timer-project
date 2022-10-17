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
  const { time, open, toggleModal } = props;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(() => e.target.value);
  };

  const handelSave = (e) => {
    e.preventDefault();

    const timeNote = {
      note: input,
      time: time / 10,
      savedAt: new Date(),
    };
    console.log(timeNote);
    console.log("SAVE DATA TO DATABASE");
    setInput("");
    toggleModal(false);
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
