import { Product } from '../entities/product'
import { CreateProductDTO } from '../dto/createProductDTO'

export interface ProductGateway {
  listAll(): Promise<Array<Product>>
  create(createProductDTO: CreateProductDTO): Promise<Product>
}
