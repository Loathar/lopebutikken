import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    speak: (state) => {
      console.log("Hi mom!");
      state.count += 1;
    },
    lol: (state) => {
      console.log("lol ass!");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, speak, lol } =
  counterSlice.actions;

export default counterSlice.reducer;
