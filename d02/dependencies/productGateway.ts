import { InMemoryProductGateway } from '../src/adapters/secondary/inMemoryProductGateway'

const productGateway = new InMemoryProductGateway()
const tshirt = {
  id: 'abc123',
  name: 'Tshirt super cool',
  price: 1000
}
const pull = {
  id: 'def465',
  name: 'Pull de noel',
  price: 2999
}
productGateway.feedWith(tshirt, pull)
export default productGateway
