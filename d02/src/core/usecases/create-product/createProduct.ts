import { useProductStore } from '../../../store/productStore'
import { ProductGateway } from '../../gateways/productGateway'
import { CreateProductDTO } from '../../dto/createProductDTO'

export const createProduct = async (createProductDTO: CreateProductDTO, productGateway: ProductGateway) => {
  const productStore = useProductStore()
  const created = await productGateway.create(createProductDTO)
  productStore.add(created)
}
