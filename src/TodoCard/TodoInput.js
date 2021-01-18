import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../TodosContext";

const TodoInput = ({ id, name, ...restProps }) => {
  const { handleChangeTodoEditValues, todoEditValues } = useContext(
    TodosContext
  );

  return (
    <TextField
      id={id}
      fullWidth
      placeholder={name[0].toUpperCase() + name.substring(1)}
      name={name}
      value={todoEditValues[name] || ""}
      onChange={handleChangeTodoEditValues}
      {...restProps}
    />
  );
};

export default TodoInput;
