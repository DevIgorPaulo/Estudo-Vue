<template>
    <h1 :class="{'title': true, 'home': true}">Curso Vue 3</h1>
    <div class="todos-item" v-for="(obj, index) in todos" :key="obj.id" >
        {{ index + 1 }}   - {{ obj.title }}
    </div>
</template>

<script>
export default{
    name: 'TheHeader',
    data(){
        return {

            todos:[
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            }]
        }
    }
}
</script>

<style>
    .title{
        font-size: 25px;
        color: blue;
    }

    .home{
        font-size: 30px;
        color: green;
    }
    
    .todos-item{
        background-color: black;
        color: white;
        margin: 0 0 5px 0;
        padding: 3px 6px;
    }
</style>