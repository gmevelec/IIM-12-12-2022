import { InMemoryProductGateway } from '../secondary/inMemoryProductGateway'
import { Product } from '../../core/entities/product'

export const productGateway = () => {
  const productGateway = new InMemoryProductGateway()
  const tshirt: Product = {
    id: 'abc123',
    name: 'T-shirt',
    imgUrl: 'assets/t-shirt.png'
  }
  const pull: Product = {
    id: 'def456',
    name: 'Pull',
    imgUrl: 'assets/pull.png'
  }
  const pantalon: Product = {
    id: 'jkl789',
    name: 'Pantalon',
    imgUrl: 'assets/pantalon.png'
  }
  productGateway.feedWith(tshirt, pull, pantalon)
  return productGateway
}
