import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: "Hi mom!",
  amount: 0,
};
console.log(initialState);
export const checkOutSlice = createSlice({
  name: "checkout",
  initialState,

  reducers: {
    logCart: (state) => {
      console.log("You have checked out");
      state.cart = " Hi mom uppdated! :D";
      console.log(state.cart);
    },

    uppdateAmount: (state) => {
      state.amount += 1;
    },
  },
});

export const { logCart, uppdateAmount } = checkOutSlice.actions;

export default checkOutSlice.reducer;
