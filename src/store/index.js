import { createStore } from "vuex";

const store = createStore({
  state: {
    food: {
      product: null,
      price: null,
    },
  },

  mutations: {
    addItem(state, items) {
      state.food.product = items.product;
      state.food.price = items.price;
    },
  },

  strict: true,
});

export default store;
