export class CreateProductVM {
  private _name: string = ''
  private _price: number = 0
  private _isNameValid: boolean = true

  get name(): string {
    return this._name
  }
  set name(name: string) {
    this._name = name
    if (this._name.length < 3) {
      this._isNameValid = false
    } else {
      this._isNameValid = true
    }
  }

  get isNameValid(): boolean {
    return this._isNameValid
  }

  get price(): number {
    return this._price
  }
}

export const createProductVM = () => {
  return new CreateProductVM()
}
