import { RootReducer } from "../reducer/root.reducer";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
