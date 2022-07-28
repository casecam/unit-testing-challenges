import { faker } from '@faker-js/faker'
import { Item } from './types'

export function getRandomItems(count: number) {
  let items: Item[] = []
  Array.from({ length: count }).forEach((item, index) => items.push(createRandomItem(index + 1)))
  return items
}

function createRandomItem(id: number): Item {
  return {
    id: id,
    name: faker.commerce.productName(),
    amount: 2,
    price: 15.00,
    description: faker.commerce.productAdjective(),
    inStock: faker.datatype.boolean()
  }
}

export const dummyArray: Item[] = [
  {
    id: 1,
    name: faker.commerce.productName(),
    amount: 2,
    price: 15.00,
    description: faker.commerce.productAdjective(),
    inStock: true
  },
  {
    id: 2,
    name: 'MATCH_THIS_VALUE',
    amount: 2,
    price: 15.00,
    description: faker.commerce.productAdjective(),
    inStock: false
  },
  {
    id: 3,
    name: 'MATCH_THIS_VALUE',
    amount: 2,
    price: 15.00,
    description: faker.commerce.productAdjective(),
    inStock: true
  },
  {
    id: 4,
    name: 'MATCH_THIS_VALUE',
    amount: 2,
    price: 15.00,
    description: faker.commerce.productAdjective(),
    inStock: false
  },
]