<template>
    <div>
        <AppProduct v-for="product in $store.state.products" :product="product" :key="product.id"></AppProduct>
    </div>
</template>
<script>

import AppProduct from '@/components/Product/AppProduct.vue';
export default {
    name: 'AppProducts',
    components: {
        AppProduct
    },
}
</script>