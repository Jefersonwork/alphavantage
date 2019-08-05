import api from "../../api";

export const changeSymbol = event => ({
  type: "SYMBOL_CHANGE",
  payload: event.target.value
});

export const getQuote = (symbol) => {
  
  return (dispatch, getState) => {
    api.get(`/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=CH0Q7L9WWQIR3NB5`)
      .then(resp => {
        dispatch({ type: "GET_QUOTE", payload: resp.data })
      })
    api.get(`/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=CH0Q7L9WWQIR3NB5`)
      .then(resp => {
        dispatch({ type: "GET_DATA", payload: resp.data })
      })
  };
}