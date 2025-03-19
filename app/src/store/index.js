import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: 1,
      name: 'Cleber',
      age: 57
    },
    products: [
      {
        id: 1,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 2,
        name: 'Bola',
        price: 100
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  getters: {
  },
  mutations: {
    updateUser(state, data){
      state.user = data
    },
    addToCart(state, data){
      state.cart.push(data)
    },
    removeFromCart(state, id){
      let idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
