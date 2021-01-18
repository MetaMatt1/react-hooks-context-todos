import { CardActions, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../../TodosContext";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

const useStyles = makeStyles((theme) => ({
  lastUpdatedText: { paddingRight: "8px" }
}));

const TodoFooter = ({ id }) => {
  const { todos, todoIdInEditMode } = useContext(TodosContext);
  const { lastUpdated } = todos.find((todo) => todo.id === id);
  const isEditing = todoIdInEditMode === id;
  const classes = useStyles();

  return (
    <CardActions>
      {isEditing ? <SaveButton id={id} /> : <EditButton id={id} />}
      <DeleteButton id={id} />
      <div style={{ flexGrow: 1 }} />
      <Typography
        variant="caption"
        color="textSecondary"
        className={classes.lastUpdatedText}
      >
        {lastUpdated}
      </Typography>
    </CardActions>
  );
};

export default TodoFooter;
