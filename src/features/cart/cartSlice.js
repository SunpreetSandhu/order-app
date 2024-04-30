import { createSlice } from '@reduxjs/toolkit';

const initalState = {
  //   cart: [],

  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initalState,
  reducers: {
    addItem(state, action) {
      //payload = newitem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId of deleted item
      //the condition in filter are the things that stay in array
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId to increase quantity
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity + item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity + item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
