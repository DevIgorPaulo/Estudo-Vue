<template>
    <h1 v-if="$slots.title">
        <slot name="title"></slot>
    </h1>
    <p v-if="$slots.description">
        <slot name="description"></slot>
    </p>
    <div v-if="$slots.default">
        <slot></slot>
    </div>
</template>

<script>
export default{
    name: 'TheHeader',
    data(){
        return {

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