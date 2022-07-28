import { getRandomItems } from '../data/data'
import { Item } from '../data/types'

export function getTotalPrice(count: number) {
  return getRandomItems(count).reduce((sum, { amount, price }) => sum + price * amount, 0)
}

export function matchObjectAndString(arr: Item[], stringToMatch: string) {
  return arr.filter(item => item.name === stringToMatch)[0]
}