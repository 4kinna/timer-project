import "./App.css";
import Stopwatch from "./component/Stopwatch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/montserrat";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Montserrat"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Stopwatch />
      </div>
    </ThemeProvider>
  );
}

export default App;
