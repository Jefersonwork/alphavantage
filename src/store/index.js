import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";
// import promise from "redux-promise";
import thunk from "redux-thunk";

const store = applyMiddleware(thunk)(createStore)(rootReducer);

export default store;