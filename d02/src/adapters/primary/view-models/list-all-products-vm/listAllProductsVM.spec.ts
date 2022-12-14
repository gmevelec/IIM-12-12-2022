import { listAllProductsVM } from './listAllProductsVM'
import { useProductStore } from '../../../../store/productStore'
import { createPinia, setActivePinia } from 'pinia'

describe('List all products VM', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should return nothing when there is no products', () => {
    const expectedVM: any = {
      items: []
    }
    expect(listAllProductsVM()).toEqual(expectedVM)
  })
  it('should return nothing when there is no products', () => {
    const tshirt = {
      id: 'abc123',
      name: 'Tshirt super cool',
      price: 1000
    }
    const pull = {
      id: 'def456',
      name: 'Pull de noel',
      price: 2999
    }
    const productStore = useProductStore()
    productStore.items = [tshirt, pull]
    const expectedVM: any = {
      items: [
        {
          id: 'abc123',
          name: 'TSHIRT SUPER COOL',
          price: '10 €'
        },
        {
          id: 'def456',
          name: 'PULL DE NOEL',
          price: '29.99 €'
        }
      ]
    }
    expect(listAllProductsVM()).toEqual(expectedVM)
  })
})

