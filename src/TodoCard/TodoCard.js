import React from "react";
import Card from "@material-ui/core/Card";
import TodoContent from "./TodoContent";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%"
  }
}));

const TodoCard = ({ id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <TodoHeader id={id} />
      <TodoContent id={id} />
      <TodoFooter id={id} />
    </Card>
  );
};

export default TodoCard;
