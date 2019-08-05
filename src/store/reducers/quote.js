const INITIAL_STATE = {
  quote: {}
}

export default function getQuote(state = INITIAL_STATE, action) {
  if (action.type === "GET_QUOTE") {
    return { ...state, quote: action.payload }
  }

  return state;
}