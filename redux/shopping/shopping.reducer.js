import { createSlice } from "@reduxjs/toolkit/dist";

export const shopSlice = createSlice({
  name: "shopCart",
  initialState: {
    foodsList: [],
    total: 0,
  },
  reducers: {
    addTo: (state, action) => {
      const newFood = action.payload;
      const existingFood = state.foodsList.find(
        (food) => food.id === newFood.id
      );

      if (existingFood) {
        existingFood.quantity++;
        existingFood.totalCost += newFood.cost;
      } else {
        state.foodsList.push({
          id: newFood.id,
          cost: newFood.cost,
          quantity: 1,
          totalCost: newFood.cost,
          name: newFood.name,
        });
      }
      state.total++;
    },
    removeCart: (state, action) => {
      const id = action.payload;
      const existingFood = state.foodsList.find((food) => food.id === id);

      if (existingFood.quantity === 1) {
        state.foodsList = state.foodsList.filter((food) => food.id !== id);
      } else {
        existingFood.quantity--;
        existingFood.totalCost -= existingFood.cost;
      }
      state.total--;
    },
    fullRemove: (state, action) => {
      const id = action.payload;
      const existingFood = state.foodsList.find((food) => food.id === id);
      state.total -= existingFood.quantity;

      if (existingFood.quantity !== 0) {
        state.foodsList = state.foodsList.filter((food) => food.id !== id);
      } else {
        existingFood.quantity = 0;
        existingFood.totalCost = 0;
        existingFood.id.pop(state.foodsList.id);
      }
    },
  },
});

export const shopCartActions = shopSlice.actions;

export default shopSlice;
