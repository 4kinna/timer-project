import { Stack } from "@mui/system";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import HistoryIcon from "@mui/icons-material/History";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        marginBottom={6}
      >
        {!props.active && !props.isPaused ? (
          <IconButton onClick={props.handleStart}>
            <PlayArrowIcon fontSize="large" color="warning" />
          </IconButton>
        ) : props.isPaused ? (
          <IconButton onClick={props.handlePause}>
            <PauseIcon fontSize="large" color="warning" />
          </IconButton>
        ) : (
          <IconButton onClick={props.handleResume}>
            <PlayArrowIcon fontSize="large" color="warning" />
          </IconButton>
        )}
        <IconButton onClick={props.handleReset}>
          <HistoryIcon fontSize="large" color="success" />
        </IconButton>

        {/* SAVE TIME BUTTON */}
        <IconButton onClick={props.handleToggle}>
          <SaveAltIcon fontSize="large" color="info" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default Buttons;
