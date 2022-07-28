import { getRandomItems } from '../data/data'

export function getTotalPrice(count: number) {
  return getRandomItems(count).reduce((sum, { amount, price }) => sum + price * amount, 0)
}