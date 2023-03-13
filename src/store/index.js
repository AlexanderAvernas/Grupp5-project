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
    count: "",
    appetizerId: [],
    chosenAppetizers: [],
    amountAppetizers: [],
    chosenAppetizersPrice: [],
    appetizerTotalPrice: 0,
  },
  getters: {
priceCalc: state =>{
  return state.appetizerTotalPrice - state.count 
}
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
    selectSeat(state, seat) {
      state.table = seat;
      console.log(state.table);
    },
    updateCount(state, payload) {
      state.count = payload;
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
      }

      /* TOTAL PRICE */

      state.appetizerTotalPrice = state.appetizerTotalPrice + price;

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
      } else {
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
  },
});

export default store;
