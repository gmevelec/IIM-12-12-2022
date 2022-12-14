import { useProductStore } from '../../../../store/productStore'

export interface ListAllProductsItemVM {
  id: string
  name: string
  price: string
}

export interface ListAllProductsVM {
  items: Array<ListAllProductsItemVM>
}

export const listAllProductsVM = (): ListAllProductsVM => {
  const productStore = useProductStore()
  return {
    items: productStore.items.map(product => {
      return {
        id: product.id,
        name: product.name.toUpperCase(),
        price: `${product.price / 100} €`
      }
    })
  }
}
