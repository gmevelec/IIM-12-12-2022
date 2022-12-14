import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      items: [] as Array<any>
    }
  },
  actions: {
    list(products: Array<any>) {
      this.items = products
    }
  }
})
