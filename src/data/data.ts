import { faker } from '@faker-js/faker'

type Item = {
  id: number;
  name: string;
  amount: number;
  price: number;
  description: string;
  inStock: boolean;
}


export function getRandomItems(count: number) {
  let items: Item[] = []
  Array.from({ length: count }).forEach((item, index) => items.push(createRandomItem(index)))
  return items
}

function createRandomItem(id: number): Item {
  return {
    id: id,
    name: faker.commerce.productName(),
    amount: 2,
    price: 15.00,
    description: faker.commerce.productAdjective(),
    inStock: true
  }
}
