import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import Main from "./components/Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d35400", //your color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
