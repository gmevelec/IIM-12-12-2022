import { createProductVM } from './createProductVM'

describe('Create product VM', () => {
  let vm
  beforeEach(() => {
    vm = createProductVM()
  })
  describe('Initially', () => {
    it('should initialize the vm', () => {
      expect(vm.name).toEqual('')
      expect(vm.isNameValid).toBeTruthy()
      expect(vm.price).toEqual(0)
    })
  })
  describe('Update name', () => {
    it('should update name', () => {
      vm.name = 'chaussettes'
      expect(vm.name).toEqual('chaussettes')
    })
    it('should set an error if length < 3', () => {
      vm.name = 'po'
      expect(vm.name).toEqual('po')
      expect(vm.isNameValid).toBeFalsy()
    })
    it('should not set an error if length === 3', () => {
      vm.name = 'pop'
      expect(vm.name).toEqual('pop')
      expect(vm.isNameValid).toBeTruthy()
    })
    it('should set an error and remove when length > 3', () => {
      vm.name = 'po'
      expect(vm.isNameValid).toBeFalsy()
      vm.name = 'pop'
      expect(vm.isNameValid).toBeTruthy()
    })
  })
})
