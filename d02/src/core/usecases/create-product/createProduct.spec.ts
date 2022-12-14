import { Product } from '../../entities/product'
import { useProductStore } from '../../../store/productStore'
import { createPinia, setActivePinia } from 'pinia'
import { createProduct } from './createProduct'
import { InMemoryProductGateway } from '../../../adapters/secondary/inMemoryProductGateway'
import { FakeUUIDGenerator } from '../../../adapters/secondary/fakeUUIDGenerator'
import { CreateProductDTO } from '../../dto/createProductDTO'

describe('Create product', () => {
  let productGateway: InMemoryProductGateway
  const pantalon: Product = {
    id: 'jkl789',
    name: 'Pantalon',
    price: 2999
  }
  const chaussettes: Product = {
    id: 'mno123',
    name: 'Chaussettes moches',
    price: 399
  }
  let uuidGenerator: FakeUUIDGenerator
  beforeEach(() => {
    setActivePinia(createPinia())
    uuidGenerator = new FakeUUIDGenerator()
    productGateway = new InMemoryProductGateway(uuidGenerator)
  })
  describe('There is no previous product', () => {
    describe('Create an pantalon', () => {
      beforeEach(async () => {
        await whenCreateProduct(pantalon.id, {
          name: pantalon.name,
          price: pantalon.price
        })
      })
      it('should save the product in the store', () => {
        expectStoreToContains(pantalon)
      })
      it('should save the product in the gateway', async () => {
        await expectGatewayToContains(pantalon)
      })
    })
    describe('Create chaussettes', () => {
      beforeEach(async () => {
        await whenCreateProduct(chaussettes.id, {
          name: chaussettes.name,
          price: chaussettes.price
        })
      })
      it('should save the product in the store', () => {
        expectStoreToContains(chaussettes)
      })
      it('should save the product in the gateway', async () => {
        await expectGatewayToContains(chaussettes)
      })
    })
  })

  describe('There is previous product', () => {
    beforeEach(async () => {
      givenSomeProductsExists(pantalon)
      await whenCreateProduct(chaussettes.id, {
        name: chaussettes.name,
        price: chaussettes.price
      })
    })
    it('should save the product in the store', () => {
      expectStoreToContains(pantalon, chaussettes)
    })
    it('should save the product in the gateway', async () => {
      await expectGatewayToContains(pantalon, chaussettes)
    })
  })

  const givenSomeProductsExists = (...products: Array<Product>) => {
    productGateway.feedWith(...products)
    const productStore = useProductStore()
    productStore.items = products
  }

  const whenCreateProduct = async (id: string, createProductDTO: CreateProductDTO) => {
    uuidGenerator.setNextUuid(id)
    await createProduct(createProductDTO, productGateway)
  }

  const expectStoreToContains = (...products: Array<Product>) => {
    const productStore = useProductStore()
    expect(productStore.items).toEqual(products)
  }
  const expectGatewayToContains = async (...products: Array<Product>) => {
    expect(await productGateway.listAll()).toEqual(products)
  }
})
