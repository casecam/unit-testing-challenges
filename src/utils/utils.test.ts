import { getIfInStock, getTotalPrice, matchObjectAndString, renameObjKeys } from "./utils";
import { dummyArray, MOCK_CHARACTERS } from "../data/data";
import { fetchCharacters } from "./api-utils";


describe('unit tests', () => {
  beforeEach(() => {
    // resolve to a promise of an object that has a fn named json which resolves a promise of MOCK_CHARACTERS
    jest.spyOn(global, 'fetch').mockResolvedValue(
      Promise.resolve({json: () => Promise.resolve(MOCK_CHARACTERS)}) as Promise<Response>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

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
      objOfDescription: expect.any(String),
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

  // test 5
  it('hits the rick and morty api and returns results', async () => {
    const results = await fetchCharacters()
    expect(fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(results).toHaveLength(20)
    expect(results).toEqual(expect.arrayContaining(MOCK_CHARACTERS.results))
  })
  
  // test 5.1
  it('hits the rick and morty api & throws error', async () => {
    const errorMsg = 'TERRIBLE_FAILURE'
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error(errorMsg))
    try {
      await fetchCharacters()
      // prove that the error is thrown and does not reach this expect block
      expect(true).toBe(false)
    } catch (error) {
      const message = (error as Error).message
      expect(message).toBe(errorMsg) // eslint-disable-line
    }
  })
})