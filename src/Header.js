import React, { useContext } from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { TodosContext } from "./TodosContext";
import NoteIcon from "@material-ui/icons/DescriptionOutlined";

const useStyles = makeStyles((theme) => ({
  noteIcon: {
    marginRight: theme.spacing(1),
    marginLeft: "-4px"
  },
  buttonLabel: {
    color: theme.palette.grey[200]
  },
  title: {
    color: theme.palette.grey[200]
  }
}));

const Header = () => {
  const { createTodo } = useContext(TodosContext);
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <NoteIcon className={classes.noteIcon} />
        <Typography className={classes.title}>Cruddy Todos</Typography>
        <div style={{ flexGrow: 1 }} />
        <Button
          color="secondary"
          size="small"
          variant="contained"
          onClick={() => createTodo()}
          startIcon={<AddIcon fontSize="large" />}
          classes={{ label: classes.buttonLabel }}
        >
          New Todo
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
