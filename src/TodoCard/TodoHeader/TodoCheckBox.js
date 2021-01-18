import React, { useContext } from "react";
import { TodosContext } from "../../TodosContext";
import { Checkbox } from "@material-ui/core";

const TodoCheckBox = ({ id }) => {
  const { toggleTodoCompleted, todos } = useContext(TodosContext);
  const todo = todos.find((t) => t.id === id);

  return (
    <Checkbox
      checked={todo.completed}
      onChange={() => toggleTodoCompleted(id)}
    />
  );
};

export default TodoCheckBox;
