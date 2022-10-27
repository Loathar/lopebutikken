import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import checkOutReducer from "./checkout";
import "./cartSlice";

interface GlobalStore {
  reducer: {
    counter: {};
    checkout: {};
  };
}
//Global store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checkout: checkOutReducer,
  },
});
