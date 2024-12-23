import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Global";
import "./index.css";
import Body from "./components/Body";

const theme = {
  color: {
    grey: "lightGrey",
    red: "hsl(14, 86%, 42%)",
    Green: " hsl(159, 69%, 38%)",
    Rose50: " hsl(20, 50%, 98%)",
    Rose100: "hsl(13, 31%, 94%)",
    Rose300: "hsl(14, 25%, 72%)",
    Rose400: " hsl(7, 20%, 60%)",
    Rose500: "hsl(12, 20%, 44%)",
    Rose900: "hsl(14, 65%, 9%)",
    white: "#fff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Body />
    </ThemeProvider>
  );
}

export default App;
