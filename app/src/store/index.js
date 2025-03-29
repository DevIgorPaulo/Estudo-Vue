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
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if(index >= 0){
        state.todos.splice(index, 1, payload)
      }else{
        state.todos.push(payload);
      }
    },

    deleteTodo(state, id){
      const index = state.todos.findIndex(todo => todo.id === id)
      if(index >= 0){
        state.todos.splice(index, 1)
      }
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
    },

    updateTodo({commit}, {id, data}){
      axios.put(`http://localhost:3000/todos/${id}`, data).then((response) =>{
        return commit('storeTodo', response.data)
      })
    },
    deleteTodo({commit}, id){
      axios.delete(`http://localhost:3000/todos/${id}`).then(() =>{
        return commit('deleteTodo', id);
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
