import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
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
    updateFormValues(state, payload) {
      state.formValues[payload.field] = payload.value;
    },
  },

  strict: true,
});

export default store;
