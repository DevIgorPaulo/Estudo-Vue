import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload){
      state.todos = payload;
    },

    storeTodo(state, payload){
      state.todos.push(payload);
    }
  },
  actions: {
    getTodos({commit}){
      axios.get("http://localhost:3000/todos")
      .then((response) =>{
        return commit('storeTodos', response.data)
      })
    },

    addTodo({commit}, payload){
      axios.post("http://localhost:3000/todos", payload)
      .then((response) =>{
        return commit('storeTodo', response.data)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
