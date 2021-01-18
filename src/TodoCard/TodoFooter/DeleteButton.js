import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import { TodosContext } from "../../TodosContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.error.main
  }
}));

const DeleteButton = ({ id }) => {
  const { deleteTodo } = useContext(TodosContext);
  const classes = useStyles();

  return (
    <IconButton
      size="small"
      className={classes.button}
      onClick={() => deleteTodo(id)}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};

export default DeleteButton;
