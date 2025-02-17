import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = []

const initState = () => JSON.parse(localStorage.getItem("todos")) || [];


export default function useTodos() {

  const [state, dispatch] = useReducer(todoReducer, initialState, initState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const handleNewTodo = (todo) => {
    dispatch({
      type: "add",
      payload: todo,
    });
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "complete",
      payload: id,
    });
  };

  const todosCount = state.length
  const pendingTodosCount = state.filter(todo => !todo.done).length

  return {
    state,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount
  }
}
