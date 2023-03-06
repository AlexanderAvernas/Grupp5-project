import { createStore } from "vuex";

const store = createStore({
  state: {
    food: {
      product: null,
      price: null,
    },
    date: "",
    time: "",
    guests: "",
  },

  mutations: {
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
