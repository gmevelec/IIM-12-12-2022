import { useProductStore } from '../../../store/productStore'
import { ProductGateway } from '../../gateways/productGateway'

export const listAllProducts = async (productGateway: ProductGateway) => {
  const products = await productGateway.listAll()
  const productStore = useProductStore()
  productStore.list(products)
}
