import { Product } from '../entities/product'

export interface ProductGateway {
  listAll(): Promise<Array<Product>>
}
