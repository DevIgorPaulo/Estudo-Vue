<template>
    <AppAlert v-if="showAlert">
        <template #msg> 
            <header :class="computedAlertClass"><h1>{{alertMsg}}</h1></header>
        </template>
    </AppAlert>
    <div class="card">{{ product.name }} - {{ product.price }}
        <button class="btn-add" @click="addToCart()">Adicionar ao Cart</button>
        <button class="btn-remove" @click="removeFromCart()" v-if="inCart">Remover do Cart</button>
    </div>
</template>
<script>

import AppAlert from '../AppAlert.vue';
export default {
    name: 'AppProduct',
    components: {
        AppAlert
    },
    data(){
        return {
            inCart: false,
            showAlert: false,
            alertClass: '',
            alertMsg: ''
        }
    },
    props: {
        product: Object
    },
    methods: {
        addToCart(){
            this.$store.commit('addToCart', this.product);
            this.inCart = true;
            this.openAlert('success', 'Produto adicionado ao carrinho!');
        },

        removeFromCart(){
            this.$store.commit('removeFromCart', this.product.id)
            this.inCart = false;
            this.openAlert('danger', 'Produto excluído com sucesso!');
        },

        openAlert(type, msg){
            this.alertMsg = msg;
            this.alertClass = type;
            this.showAlert = true;

            setTimeout(() =>{
                this.showAlert = false;
            }, 1000)
        }
    },
    computed: {
        computedAlertClass(){
            return `alert ${this.alertClass}`
        }
    }

}
</script>

<style scoped>
.card {
    z-index: 1; 
    background-color: #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.btn-add{
    background-color: rgb(62, 182, 62);
    padding: 4px;
    border-radius: 5px;
    color: white;
    border: solid 1px green;
}
.btn-add:hover{
    transition: background-color .5s;
    background-color: rgb(59, 155, 52);
    color: rgb(197, 194, 194);
}
.btn-remove{
    background-color: rgb(247, 67, 67);
    padding: 4px;
    border-radius: 5px;
    color: white;
    border: solid 1px red;
}
.btn-remove:hover{
    transition: background-color .5s;
    background-color: rgb(240, 67, 67);
    color: rgb(197, 194, 194);
}
</style>