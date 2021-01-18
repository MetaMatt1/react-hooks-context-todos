import { CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../TodosContext";
import TodoInput from "./TodoInput";

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    whiteSpace: "pre-line"
  }
}));

const TodoContent = ({ id }) => {
  const { todos, todoIdInEditMode } = useContext(TodosContext);
  const todo = todos.find((todo) => todo.id === id);
  const isEditing = todoIdInEditMode === id;
  const classes = useStyles();

  return isEditing ? (
    <CardContent>
      <TodoInput multiline fullWidth name="description" />
    </CardContent>
  ) : todo?.description && todo.description.trim() !== "" ? (
    <CardContent>
      <Typography variant="body1" className={classes.descriptionText}>
        {todo.description}
      </Typography>
    </CardContent>
  ) : null;
};

export default TodoContent;
