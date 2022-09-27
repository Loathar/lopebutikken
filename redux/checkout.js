import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: "Hi mom",
};

export const checkOutSlice = createSlice({
  name: "checkout",
  initialState,

  reducers: {
    logCart: (state) => {
      console.log("You have checked out");
      state.cart.push(1);
      console.log(state.cart);
    },
  },
});

export const { logCart } = checkOutSlice.actions;

export default checkOutSlice.reducer;
