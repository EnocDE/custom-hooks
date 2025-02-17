import { useState } from "react"

export function useCounter(initialvalue = 10) {
  const [counter, setCounter] = useState(initialvalue)

  const increment = (value = 1) => setCounter(prevCounter => prevCounter + value)
  const decrement = (value = 1) => counter > 1 ? setCounter(prevCounter => prevCounter - value) : null
  const reset = () => setCounter(initialvalue)

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
