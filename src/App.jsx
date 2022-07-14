import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Basic from "./Basic";
import Counter from "./Counter";
import Secret from "./Secret";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Basic Child={Counter}></Basic>
      <Basic Child={Secret}></Basic>
    </ThemeProvider>
  );
}

export default App;
