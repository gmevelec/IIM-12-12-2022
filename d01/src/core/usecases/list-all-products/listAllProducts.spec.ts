import { listAllProducts } from './listAllProducts'
import { InMemoryProductGateway } from '../../../adapteurs/secondary/inMemoryProductGateway'

describe('List all products', () => {
  let productGateway: InMemoryProductGateway
  beforeEach(() => {
    productGateway = new InMemoryProductGateway()
  })
  it('should return [] when there is no products', async () => {
    const allProducts = await listAllProducts(productGateway)
    expect(allProducts).toEqual([])
  })
  it('should return all products when there is products', async () => {
    const tshirt = {
      id: 'abc123',
      name: 'T-shirt',
      imgUrl: 'assets/t-shirt.png'
    }
    const pull = {
      id: 'def456',
      name: 'Pull',
      imgUrl: 'assets/pull.png'
    }
    productGateway.feedWith(tshirt, pull)
    const allProducts = await listAllProducts(productGateway)
    const expectedProducts: Array<any> = [tshirt, pull]
    expect(allProducts).toEqual(expectedProducts)
  })
})
