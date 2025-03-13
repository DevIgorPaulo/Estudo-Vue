<template>  
    <div>
      <TheHeader>
        <template v-slot:title>Home</template>
        <!-- <template v-slot:description>Area Incial</template> -->
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloribus sed architecto fugiat sint. Est qui quibusdam explicabo laudantium adipisci, asperiores quo veniam quisquam soluta. Quam aspernatur nesciunt ratione quia.
      </TheHeader>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';


export default {
  name: 'App',
  components: {TheHeader},
  data() {
    return {
      esporte: 'Karate',      
    }
  },

  watch: {
    esporte(newValue, oldValue){
      console.log(newValue)
      console.log(oldValue)
    },
    user:{
      handler(){
        console.log("AJAX");
      },
      deep: true
    }
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
