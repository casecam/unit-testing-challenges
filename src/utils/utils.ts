import { getRandomItems } from '../data/data'

export function getTotalPrice(count: number) {
  // const items = getRandomItems(count)

  return getRandomItems(count).reduce((sum, { amount, price }) => sum + price * amount, 0)
}