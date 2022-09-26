import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
//Global store
export const store = configureStore({
  reducer: { counter: counterReducer },
});
