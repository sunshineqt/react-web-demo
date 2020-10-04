import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import loginReducer from "./loginReducer";
import counterReducer from "./counterReducer";

const store = createStore(
  combineReducers({ user: loginReducer }, counterReducer),
  applyMiddleware(thunk, logger)
);

export default store;
