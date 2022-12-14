import { ProductGateway } from '../../core/gateways/productGateway'

export class InMemoryProductGateway implements ProductGateway {
  private products: Array<any> = []

  listAll(): Promise<Array<any>> {
    return Promise.resolve(this.products)
  }

  feedWith(...products: Array<any>) {
    this.products = products
  }
}
