import { dummyArray } from "../data/data";
import { getIfInStock, getTotalPrice, matchObjectAndString, renameObjKeys } from "./utils";

describe('unit tests', () => {
  // test 1
  it('takes an array of objects & returns sum of all prices', () => {
    const numOfItems = 5
    const actual = getTotalPrice(numOfItems)
    const expected = 150

    expect(expected).toEqual(actual) 
  })

  // test 2
  it('takes an array & string & returns 1st object that matches property\'s value & string', () => {
    const stringToMatch = 'MATCH_THIS_VALUE'
    const actual = matchObjectAndString(dummyArray, stringToMatch)
    const expected = {
      id: 2,
      name: 'MATCH_THIS_VALUE',
      amount: 2,
      price: 15.00,
      description: expect.any(String),
      inStock: expect.any(Boolean)
    }
    
    expect(actual).toMatchObject(expected)
  })

  // test 3
  it('takes an array of objects and renames the keys', () => {
    const numOfItems = 10
    const actual = renameObjKeys(numOfItems)
    const expected = {
      objId: expect.any(Number),
      objName: expect.any(String),
      objAmount: expect.any(Number),
      objPrice: expect.any(Number),
      objDescription: expect.any(String),
      objInStock: expect.any(Boolean)
    }
    actual.forEach((item) => {
      expect(item).toMatchObject(expected)
    })
  })

  // test 4
  it('takes an array and returns an array only with items in stock', () => {
    const actual = getIfInStock(dummyArray)
    const expected = [
      {
        id: expect.any(Number),
        name: expect.any(String),
        amount: expect.any(Number),
        price: expect.any(Number),
        description: expect.any(String),
        inStock: true
      },
      {
        id: expect.any(Number),
        name: expect.any(String),
        amount: expect.any(Number),
        price: expect.any(Number),
        description: expect.any(String),
        inStock: true
      },
    ]
    expect(expected).toEqual(expect.arrayContaining(actual))
  })
})