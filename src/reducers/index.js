const initState = {
  result: 0,
  increment: 5
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, 
        result: state.result + state.increment
      }
    case 'DECREMENT':
      return {
        ...state,
         result: state.result - state.increment
      }
    case 'RESET_COUNTER':
      return {
        ...state,
         result: 0
      }
    case 'CHANGE_INCREMENT':
      return {
        ...state,
         increment: action.increment
      }
    case 'RESET_INCREMENT':
      return {
        ...state,
         increment: 5
      }
    default:
      return state
  }
}
