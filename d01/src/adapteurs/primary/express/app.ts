import express = require('express')
import { listAllProducts } from '../../../core/usecases/list-all-products/listAllProducts'
import { productGateway } from '../dependencies'

export const app = express()


app.use(express.json())

app.get('/products', async (req: any, res: any) => {
  const products = await listAllProducts(productGateway())
  res.send(JSON.stringify(products))
})
