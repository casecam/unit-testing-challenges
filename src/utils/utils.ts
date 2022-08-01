import { getRandomItems } from '../data/data'
import { IChangeKeysObj, Item } from '../data/types'

export function getTotalPrice(count: number) {
  return getRandomItems(count)
    .reduce((sum, { amount, price }) => 
       sum + price * amount, 0)
}

export function matchObjectAndString(arr: Item[], stringToMatch: string) {
  return arr.filter(({ name }) => name === stringToMatch)[0]
}

export function renameObjKeys(count: number) {
  let arr = getRandomItems(count).map(
    (
      // this is called aliasing. Just return the new object with the aliased names
      {id: objId, name: objName, amount: objAmount, price: objPrice, description: objOfDescription, inStock: objInStock}
    ) => (
      { 
        objId,
        objName,
        objAmount,
        objPrice,
        objOfDescription,
        objInStock
  }))
  return arr
}

export function getIfInStock(arr: Item[]) {
  return arr.filter(({ inStock }) => inStock === true)
}

export function multiplyNumbersInArray(arr: number[]) {
    return arr.reduce((acc, current) => current * 4 + acc, 0)
}

export function tallyEvensAndOdds(arr: number[]) {
  const results = arr.reduce((acc, current) => {
    if(current % 2 === 0) acc++
    return acc
  },0)
  return { evens: results, odds: arr.length - results }
}

export function changeKeysToUpper(obj: IChangeKeysObj) {
  return Object.keys(obj).reduce<Partial<IChangeKeysObj>>((acc, current) => {
    (acc[current.toUpperCase() as keyof IChangeKeysObj] as unknown) = 
      obj[current as keyof IChangeKeysObj] 
    return acc
  }, {})
}

export function cleanNullValues(obj: {}) {
  (Object.keys(obj) as (keyof typeof obj)[]).forEach(key => {
    if(obj[key] === null) delete obj[key] 
  })
  return obj
}
