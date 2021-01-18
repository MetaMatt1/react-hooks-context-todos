import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/CreateOutlined";
import { TodosContext } from "../../TodosContext";

const EditButton = ({ id }) => {
  const { editTodo } = useContext(TodosContext);

  return (
    <IconButton size="small" color="secondary" onClick={() => editTodo(id)}>
      <EditIcon fontSize="small" />
    </IconButton>
  );
};

export default EditButton;
