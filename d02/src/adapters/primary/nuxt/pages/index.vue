<template>
  <h1>Coucou</h1>
  <div v-for="product in allProductsVM.items" :key="product.id">
    <div>{{product.name}}: {{product.price}}</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from '../../../../../.nuxt/imports'
import { listAllProducts } from '../../../../core/usecases/list-all-products/listAllProducts'
import { listAllProductsVM } from '../../view-models/list-all-products-vm/listAllProductsVM'
import productGateway from '../../../../../dependencies/productGateway'

onMounted(() => {
  listAllProducts(productGateway)
})

const allProductsVM = computed(() => {
  return listAllProductsVM()
})

</script>
