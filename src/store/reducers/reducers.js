const INITIAL_STATE = {
  symbol: {},
  quote: {},
  data: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SYMBOL_CHANGE":
      return { ...state, symbol: action.payload }
    case "GET_QUOTE":
      return { ...state, quote: action.payload }
    case "GET_DATA":
      return { ...state, data: action.payload }
    default:
      break;
  }

  return state;
}