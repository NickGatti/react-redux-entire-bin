let initialState = 0

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state >= 10 ) return state
      return state + 1
    case 'DECREMENT':
      if (state <= 0 ) return state
      return state - 1
    default:
      return state;
  }
}