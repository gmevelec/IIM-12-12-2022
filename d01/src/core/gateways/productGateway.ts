export interface ProductGateway {
  listAll(): Promise<Array<any>>
}
