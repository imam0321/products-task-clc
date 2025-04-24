import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const { quantity = 0, product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id: product?.id,
          quantity,
          name: product?.name,
          image: product?.image,
          currentPrice: product?.price - product?.discount_amount || 0,
          discountPrice: product?.discount_amount || 0
        });
      }
    },
    increment: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // remove if quantity goes to 0
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, increment, decrement, clear } = cartSlice.actions;

export default cartSlice.reducer;
