import { ProductGateway } from '../../gateways/productGateway'

export const listAllProducts = async (productGateway: ProductGateway): Promise<Array<any>> => {
  return await productGateway.listAll()
}
