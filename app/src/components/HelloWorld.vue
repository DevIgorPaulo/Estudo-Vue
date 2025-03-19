<template>
  <div class="hello">
    <slot name="msg"></slot>
    <h2>Bem Vindo, {{ $store.state.user.name }}</h2>
    <div>
      <button @click="updateUser()">Atualzar Usuario</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    updateUser(){
      let Usuario =  {
        id: 2,
        name: 'Wagner Moura',
        age: 45
      }

      this.$store.commit('updateUser', Usuario)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
