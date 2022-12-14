import { ProductGateway } from '../../gateways/productGateway'
import { Product } from '../../entities/product'

export const listAllProducts = async (productGateway: ProductGateway): Promise<Array<Product>> => {
  return await productGateway.listAll()
}
