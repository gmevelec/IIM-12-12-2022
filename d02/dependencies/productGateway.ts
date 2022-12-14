import { InMemoryProductGateway } from '../src/adapters/secondary/inMemoryProductGateway'
import { Product } from '../src/core/entities/product'

const productGateway = new InMemoryProductGateway()
const tshirt: Product = {
  id: 'abc123',
  name: 'Tshirt super cool',
  price: 1000
}
const pull: Product = {
  id: 'def465',
  name: 'Pull de noel',
  price: 2999
}
productGateway.feedWith(tshirt, pull)
export default productGateway
