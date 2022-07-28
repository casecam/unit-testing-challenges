import { dummyArray } from "../data/data";
import { getTotalPrice, matchObjectAndString, renameObjKeys } from "./utils";
import { Item } from '../data/types'

describe('unit tests', () => {
  it('takes an array of objects & returns sum of all prices', () => {
    const numOfItems = 5
    const actual = getTotalPrice(numOfItems)
    const expected = 150

    expect(expected).toEqual(actual) 
  })

  it('takes an array & string & returns 1st object that matches property\'s value & string', () => {
    const stringToMatch = 'MATCH_THIS_VALUE'
    const actual = matchObjectAndString(dummyArray, stringToMatch)
    const expected = {
      id: 2,
      name: 'MATCH_THIS_VALUE',
      amount: 2,
      price: 15.00,
      description: expect.any(String),
      inStock: true
    }
    
    expect(actual).toMatchObject(expected)
  })

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
})