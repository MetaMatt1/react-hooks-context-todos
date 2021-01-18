import React, { useContext } from "react";
import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { TodosContext } from "./TodosContext";
import TodoCard from "./TodoCard";

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  appBarSpacer: theme.mixins.toolbar,
  item: {
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "292px"
    }
  }
}));

const Main = () => {
  const { todos } = useContext(TodosContext);
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <main className={classes.main}>
      <div className={classes.appBarSpacer} />
      <Grid
        container
        spacing={2}
        justify={isSmallScreen ? "space-around" : "flex-start"}
      >
        {todos.map((todo) => (
          <Grid item key={todo.id} className={classes.item}>
            <TodoCard id={todo.id} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Main;
