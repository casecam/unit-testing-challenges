import { getTotalPrice } from "./utils";


describe('unit tests', () => {
  it('takes an array of objects & returns sum of all prices', () => {
    const numOfItems = 5
    const expected = 150
    const actual = getTotalPrice(numOfItems)
    expect(expected).toEqual(actual) 
  })
})