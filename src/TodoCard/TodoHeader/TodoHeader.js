import { CardHeader, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../../TodosContext";
import TodoCheckBox from "./TodoCheckBox";
import TodoInput from "../TodoInput";

const useStyles = makeStyles((theme) => ({
  cardHeader: { paddingBottom: 0 }
}));

const TodoHeader = ({ id }) => {
  const { todos, todoIdInEditMode } = useContext(TodosContext);
  const { title } = todos.find((todo) => todo.id === id);
  const isEditing = todoIdInEditMode === id;
  const classes = useStyles();

  return (
    <CardHeader
      title={isEditing ? <TodoInput id={id} name="title" /> : title}
      action={<TodoCheckBox id={id} />}
      className={classes.cardHeader}
    />
  );
};

export default TodoHeader;
