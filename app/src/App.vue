<template>
  <AppProducts/>
  <pre>
    {{ $store.state.cart }}
  </pre>
</template>

<script>

import AppProducts from '@/components/Product/AppProducts.vue';

export default {
  name: 'App',
  components: {
    AppProducts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
