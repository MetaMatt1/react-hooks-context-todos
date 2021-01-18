import React from "react";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider
} from "@material-ui/core";
import Header from "./Header";
import Main from "./Main";
import { TodosProvider } from "./TodosContext";
import { blue, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: indigo,
    secondary: blue
  }
});

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <TodosProvider>
          <div className={classes.app}>
            <Header />
            <Main />
          </div>
        </TodosProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
