const INITIAL_STATE = {
  symbol: {}
}

export default function changeSymbol(state = INITIAL_STATE, action) {
  if (action.type === "SYMBOL_CHANGE") {
    return { ...state, symbol: action.payload }
  }
  
  return state;
}