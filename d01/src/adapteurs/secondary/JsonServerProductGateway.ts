import { ProductGateway } from '../../core/gateways/productGateway'
import { Product } from '../../core/entities/product'
import axios from 'axios'

export class JsonServerProductGateway implements ProductGateway {
  async listAll(): Promise<Array<Product>> {
    const res = await axios.get('http://localhost:3000/products')
    const products = await res.data
    return products
  }
}
