<template>
    <slot name="msg" :class="variant"></slot>
</template>

<script>
export default {
    name: 'AppAlert',
}
</script>
<style>

.alert{
    padding: 15px;
    border-radius: 10px;
    color: white;
    font-weight: bolder;
    margin-bottom: 20px;
}

.danger{
    background-color: rgb(231, 45, 45);
}

.success{
    background-color: rgb(84, 224, 84);
}
</style>