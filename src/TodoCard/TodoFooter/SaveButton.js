import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import { TodosContext } from "../../TodosContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.success.main
  }
}));

const SaveButton = ({ id }) => {
  const { saveTodo } = useContext(TodosContext);
  const classes = useStyles();

  return (
    <IconButton
      className={classes.button}
      onClick={() => saveTodo(id)}
      size="small"
    >
      <SaveIcon fontSize="small" />
    </IconButton>
  );
};

export default SaveButton;
