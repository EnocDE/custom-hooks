
export function todoReducer(initialState = [], action) {

  if (action.type === "add") {
    return [action.payload, ...initialState]
  }

  if (action.type === "remove") {
    return initialState.filter(todo => todo.id != action.payload)
  }

  if (action.type === "complete") {
    return initialState.map(todo => {
      if (todo.id === action.payload) {
        return { ...todo, done: !todo.done }
      }
      return todo
    })
  }

  return initialState
}