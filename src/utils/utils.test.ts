import { 
  changeKeysToUpper,
  cleanNullValues,
  getIfInStock,
  getTotalPrice,
  matchObjectAndString,
  multiplyNumbersInArray,
  renameObjKeys,
  tallyEvensAndOdds } from "./utils"
import { dummyArray, MOCK_RM_CHARACTERS, MOCK_SWAPI_CHARACTERS } from "../data/data"
import { fetchCharacters, fetchSwapi } from "./api-utils"
import mockAxios from 'axios'

jest.mock('axios')

describe('unit tests', () => {
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
    jest.spyOn(global, 'fetch').mockResolvedValue(
      Promise.resolve({json: () => Promise.resolve(MOCK_RM_CHARACTERS)}) as Promise<Response>
      )
    const results = await fetchCharacters()
    expect(fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(results).toHaveLength(20)
    expect(results).toEqual(expect.arrayContaining(MOCK_RM_CHARACTERS.results))
  })
  
  // test 5.1
  it('hits the rick and morty api & throws error', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue(
      Promise.resolve({json: () => Promise.resolve(MOCK_RM_CHARACTERS)}) as Promise<Response>
      )
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
  
  // test 6
  it('Hits the SWAPI API using axios and returns results', async () => {
    (mockAxios.get as jest.Mock).mockResolvedValue(
      {
        data: MOCK_SWAPI_CHARACTERS,
        status: 200,
        statusText: 'OK'
      })
    const results = await fetchSwapi()
    
    expect(mockAxios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/')
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(results).toHaveLength(10)
    expect(results).toEqual(expect.arrayContaining(MOCK_SWAPI_CHARACTERS.results))
  })

  // test 7
  it('multiplies values in array by four and returns the sum', () => {
    const expected = 24
    const actual = multiplyNumbersInArray([2,4])
    expect(actual).toEqual(expected)
  })

  // test 8
  it('tallies up the odd and even numbers in an array', () => {
    const evensAndOdds = [2, 3, 4]
    const expected = { evens: 2, odds: 1 }
    const actual = tallyEvensAndOdds(evensAndOdds)
    expect(actual).toEqual(expected)
  })

  // test 9
  it('loops through an object and changes property name to uppercase', () => {
    const keysToChange = { evens: 2, odds: 1 }
    const expected = { EVENS: 2, ODDS: 1 }
    const actual = changeKeysToUpper(keysToChange)
    expect(actual).toEqual(expected)
  })

  // test 10
  it('removes null values from an object', () => {
    const objToClean = {
      one: null,
      two: 2,
      three: null,
      four: 4,
      five: 5,
    }

    const expected = {
      two: 2,
      four: 4,
      five: 5,
    }
    
    const actual = cleanNullValues(objToClean)
    expect(actual).toEqual(expected)
  })
})
