import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./shopping/shopping.reducer";

const store = configureStore({
  reducer: {
    shopcart: shopSlice.reducer,
  },
});

export default store;
