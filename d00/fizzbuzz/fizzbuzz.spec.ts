const fizzBuzz = (number: number): string => {
  if (number === 0) return "0"
  if (number % 15 === 0) return "FIZZBUZZ"
  if (number % 3 === 0) return "FIZZ"
  if (number % 5 === 0) return "BUZZ"
  return number.toString()
}

describe('FizzBuzz', () => {
  describe('Non divisible numbers', () => {
    it.each([
      ["0", 0],
      ["1", 1],
      ["7", 7]
    ])('should return "%s" when %i is provided', (expected: string, n: number) => {
      expect(fizzBuzz(n)).toBe(expected)
    })
  })
  describe('Divisible by 3', () => {
    it('should return "FIZZ" when 3 is provided', () => {
      expect(fizzBuzz(3)).toBe("FIZZ")
    })
    it('should return "FIZZ" when 6 is provided', () => {
      expect(fizzBuzz(6)).toBe("FIZZ")
    })
  })
  describe('Divisible by 5', () => {
    it('should return "BUZZ" when 5 is provided', () => {
      expect(fizzBuzz(5)).toBe("BUZZ")
    })
    it('should return "BUZZ" when 10 is provided', () => {
      expect(fizzBuzz(10)).toBe("BUZZ")
    })
  })
  describe('Divisible by 15', () => {
    it('should return "FIZZBUZZ" when 15 is provided', () => {
      expect(fizzBuzz(15)).toBe("FIZZBUZZ")
    })
    it('should return "FIZZBUZZ" when 30 is provided', () => {
      expect(fizzBuzz(30)).toBe("FIZZBUZZ")
    })
  })
})
