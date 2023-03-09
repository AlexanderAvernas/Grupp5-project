import { createStore } from "vuex";

const store = createStore({
  state: {
    food: {
      product: [],
      price: [],
    },
    date: "",
    time: "",
    guests: "",
  },

  mutations: {
    // Add product name and price to OrderNote component
    addItem(state, items) {
      state.food.product.push(items.product);
      state.food.price.push(items.price);
    },
    // Remove the latest name and price
    remItem(state) {
      state.food.product.pop();
      state.food.price.pop();
    },
    increment(state, amount) {
      state.counter += amount;
    },
    updateDate(state, payload) {
      state.date = payload;
    },
    updateTime(state, payload) {
      state.time = payload;
    },
    updateGuests(state, payload) {
      state.guests = payload;
    },
  },

  strict: true,
});

export default store;
