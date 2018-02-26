export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  }
}

export const incrementCounter = (value) => ({
  type: 'INCREMENT',
  payload: value
})

export const decrementCounter = (value) => ({
  type: 'DECREMENT',
  payload: value
})
