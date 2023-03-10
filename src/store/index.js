import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
    date: "",
    time: "",
    guests: "",  
    appetizerId: [],
    chosenAppetizers: [],
    amountAppetizers: [],
    chosenAppetizersPrice: [],
    appetizerTotalPrice: 0,

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
      
    addAppetizer(state, { appetizer, price, id }) {
      /* AMOUNT OF APPETIZERS "x2" */

      state.amountAppetizers.push(appetizer);

      var count = 0;
      var b = state.amountAppetizers.length;

      for (let i = 0; i < b; i++) {
        if (appetizer === state.amountAppetizers[i]) {
          count++;
        }
      },

      /* TOTAL PRICE */

      state.appetizerTotalPrice = state.appetizerTotalPrice + price;
    },
    selectSeat(state, seat) {
      state.table = seat;
      console.log(state.table);
    },
  },

      /* SEPARATE PRICE */

      var c = state.appetizerId.length;
      var exists = false;

      for (let i = 0; i < c; i++) {
        if (id === state.appetizerId[i]) {
          exists = true;
          state.chosenAppetizersPrice[i] =
            state.chosenAppetizersPrice[i] + price;
        }
      }

      if (exists === false) {
        state.chosenAppetizersPrice.push(price);
        state.appetizerId.push(id);
      }

      /* ADD APPETIZER TO NOTE*/

      if (state.chosenAppetizers[0] === undefined) {
        state.chosenAppetizers.push(appetizer);
      } 
      else {
        var a = state.chosenAppetizers.length;
        var same = false;

        for (let i = 0; i < a; i++) {
          if (state.chosenAppetizers[i].includes(appetizer)) {
            same = true;
            state.chosenAppetizers.splice([i], 1, appetizer + " x" + count);
          }
        }
        if (same === false) {
          state.chosenAppetizers.push(appetizer);
        }
      }
  },
});

export default store;
