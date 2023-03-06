import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
    formValues: {
      date: "",
      time: "",
      guests: "",
    },
  },

  mutations: {
    increment(state) {
      state.counter += 1;
    },
    updateFormValues(state, payload) {
      state.formValues[payload.field] = payload.value;
    },
  },

  strict: true,
});

export default store;
