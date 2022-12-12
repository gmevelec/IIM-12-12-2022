/*
  Fonction qui prend une string en param et qui renvoie un number
  "" -> 0
  "2" -> 2
  "1,3" -> 4
 */

/*
  constantes < 2 et 3
  variables < number
  if
  while
 */

const primeNumbers = (number: number): Array<number> => {
  const res = []
  let divisor = 2
  while (divisor <= number / 2) {
    while (number % divisor === 0) {
      res.push(divisor)
      number /= divisor
    }
    divisor++
  }
  if (number > 1) res.push(number)
  return res
}

describe('PrimeNumbers', () => {
  describe('Particulier', () => {
    it('should return [] when 1 is given', () => {
      expect(primeNumbers(1)).toEqual([])
    })
  })
  describe('Prime numbers', () => {
    it('should return [2] when 2 is given', () => {
      expect(primeNumbers(2)).toEqual([2])
    })
    it('should return [3] when 3 is given', () => {
      expect(primeNumbers(3)).toEqual([3])
    })
  })
  describe('Compose', () => {
    it('should return [2, 2] when 4 is given', () => {
      expect(primeNumbers(4)).toEqual([2, 2])
    })
    it('should return [2, 2, 2] when 8 is given', () => {
      expect(primeNumbers(8)).toEqual([2, 2, 2])
    })
    it('should return [3, 3] when 9 is given', () => {
      expect(primeNumbers(9)).toEqual([3, 3])
    })
    it('should return [3, 3, 3] when 27 is given', () => {
      expect(primeNumbers(27)).toEqual([3, 3, 3])
    })
    it('should return [2, 2, 3, 3, 29] when 2 * 2 * 3 * 3 * 29 is given', () => {
      expect(primeNumbers(2 * 2 * 3 * 3 * 29)).toEqual([2, 2, 3, 3, 29])
    })
  })
})
