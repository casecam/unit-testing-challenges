import { idText } from 'typescript';
import { getRandomItems } from '../data/data'
import { Item } from '../data/types'

export function getTotalPrice(count: number) {
  return getRandomItems(count).reduce((sum, { amount, price }) => sum + price * amount, 0)
}

export function matchObjectAndString(arr: Item[], stringToMatch: string) {
  return arr.filter(item => item.name === stringToMatch)[0]
}

export function renameObjKeys(count: number) {
  let arr = getRandomItems(count).map(
    (
      {id, name, amount, price, description, inStock}
    ) => (
      { 
        objId: id,
        objName: name,
        objAmount: amount,
        objPrice: price,
        objDescription: description,
        objInStock: inStock
  }))
  return arr
}

export function getIfInStock(arr: Item[]) {
  return arr.filter(({ inStock }) => inStock === true)
}