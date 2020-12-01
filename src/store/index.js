import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userRedux from "./user";

import { loginReducer } from "./loginReducer";
import { counterReducer } from "./counterReducer";

const store = createStore(
  combineReducers({ user: loginReducer, userRedux }, counterReducer),
  applyMiddleware(thunk, logger)
);

export default store;
