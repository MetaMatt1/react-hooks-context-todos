import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext
} from "react";
import { v4 as uuid } from "uuid";
import { getFormattedCurrentDate } from "./utils/getFormattedCurrentDate";

// grab the cached todos from local storage
const cachedTodos = JSON.parse(localStorage.getItem("todos"));

const TodosContext = createContext();

function TodosProvider(props) {
  // when this context mounts, if there is a cached todos array,
  // then use that for our initial state, if not then use an empty array
  const [todos, setTodos] = useState(cachedTodos || []);

  // id of the todo in edit mode
  const [todoIdInEditMode, setToggleTodoInEditMode] = useState(null);

  // todo info being edited
  const [todoEditValues, setTodoEditValues] = useState({});

  // any time the todos state changes, update the localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Implement useCallback so the definition of the function isn't re-evaluated on every re-render.
  const createTodo = useCallback(() => {
    // create a new todo object with a unique id
    const newTodo = {
      id: uuid(),
      lastUpdated: getFormattedCurrentDate(),
      completed: false
    };
    // set the todos state with a new array that includes both the new todo object
    // and all the previous todo objects
    setTodos((prevTodos) => [newTodo, ...prevTodos]);

    // turn on edit mode for the new todo we just created
    setToggleTodoInEditMode(newTodo.id);
  }, []);

  const handleChangeTodoEditValues = useCallback(
    (event) =>
      setTodoEditValues((prevTodoInfo) => {
        // aaaaaaaaaaaaaaaa                                                            the todo object, the key is set to the new value
        prevTodoInfo[event.target.name] = event.target.value;

        return { ...prevTodoInfo };
      }),
    []
  );

  // turn on edit mode for a particular todo by setting it's id as the state
  const editTodo = useCallback(
    (id) => {
      setTodoEditValues(todos.find((todo) => todo.id === id));
      setToggleTodoInEditMode(id);
    },
    [todos]
  );

  const toggleTodoCompleted = useCallback((id) => {
    setTodos((prevTodos) => {
      let updatedTodos = [...prevTodos];

      const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

      updatedTodos[todoIndex] = {
        ...updatedTodos[todoIndex],
        lastUpdated: getFormattedCurrentDate(),
        completed: !updatedTodos[todoIndex].completed
      };

      return updatedTodos;
    });
  }, []);

  const saveTodo = useCallback(() => {
    setTodos((prevTodos) => {
      // create new array of todos so react sees a change has happened
      let updatedTodos = [...prevTodos];

      // find the position of the todo we want to update in the todosCopy array
      const todoIndex = updatedTodos.findIndex(
        (todo) => todo.id === todoIdInEditMode
      );
      // update the value of the provided key in the todo object we want to update
      updatedTodos[todoIndex] = {
        ...updatedTodos[todoIndex],
        ...todoEditValues,
        lastUpdated: getFormattedCurrentDate()
      };

      // clear the todo info for next edit
      setTodoEditValues({});
      return updatedTodos;
    });
    setToggleTodoInEditMode(null);
  }, [todoIdInEditMode, todoEditValues]);

  // Delete a todo by allowing all the todo ids that don't match the id argument
  // to stay in the todos state array.
  // Implement useCallback so the definition of the function isn't re-evaluated on every re-render.
  const deleteTodo = useCallback(
    (id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)),
    []
  );

  // These are all the items available to any consumer of the context provider.
  // Implement useMemo so the definition of the providerValue is only updated
  // if the definition of any dependency changes and not on ever re-render.
  const providerValue = useMemo(
    () => ({
      createTodo,
      deleteTodo,
      editTodo,
      handleChangeTodoEditValues,
      saveTodo,
      toggleTodoCompleted,
      todoEditValues,
      todos,
      todoIdInEditMode
    }),
    [
      createTodo,
      deleteTodo,
      editTodo,
      handleChangeTodoEditValues,
      saveTodo,
      toggleTodoCompleted,
      todoEditValues,
      todos,
      todoIdInEditMode
    ]
  );

  return (
    <TodosContext.Provider value={providerValue}>
      {props.children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
