import {createStore} from "vuex"

const store = createStore ({
    state: {
        counter: 0
    },

    mutations: {
        increment(state) {
            state.counter += 1
          },
    },

    strict: true

})


export default store
