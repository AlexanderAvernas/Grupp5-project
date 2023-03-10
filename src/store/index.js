import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
    date: "",
    time: "",
    guests: "",
    table: "",
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
    selectSeat(state, seat) {
      state.table = seat;
      console.log(state.table);
    },
  },

  strict: true,
});

export default store;
