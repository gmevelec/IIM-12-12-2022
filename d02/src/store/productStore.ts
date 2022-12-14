import { defineStore } from 'pinia'
import { Product } from '../core/entities/product'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      items: [] as Array<Product>
    }
  },
  actions: {
    list(products: Array<Product>) {
      this.items = products
    },
    add(product: Product) {
      this.items.push(product)
    }
  }
})
