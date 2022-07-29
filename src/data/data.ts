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

export const MOCK_RM_CHARACTERS = 
  {
    "info": {
      "count": 826,
      "pages": 42,
      "next": "https://rickandmortyapi.com/api/character?page=2",
      "prev": null
    },
    "results": [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/4",
        "created": "2017-11-04T19:22:43.665Z"
      },
      {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
      },
      {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Abadango",
          "url": "https://rickandmortyapi.com/api/location/2"
        },
        "location": {
          "name": "Abadango",
          "url": "https://rickandmortyapi.com/api/location/2"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/27"
        ],
        "url": "https://rickandmortyapi.com/api/character/6",
        "created": "2017-11-04T19:50:28.250Z"
      },
      {
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Testicle Monster Dimension",
          "url": "https://rickandmortyapi.com/api/location/21"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11"
        ],
        "url": "https://rickandmortyapi.com/api/character/7",
        "created": "2017-11-04T19:59:20.523Z"
      },
      {
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/28"
        ],
        "url": "https://rickandmortyapi.com/api/character/8",
        "created": "2017-11-04T20:03:34.737Z"
      },
      {
        "id": 9,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/24"
        ],
        "url": "https://rickandmortyapi.com/api/character/9",
        "created": "2017-11-04T20:06:54.976Z"
      },
      {
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Worldender's lair",
          "url": "https://rickandmortyapi.com/api/location/4"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/25"
        ],
        "url": "https://rickandmortyapi.com/api/character/10",
        "created": "2017-11-04T20:19:09.017Z"
      },
      {
        "id": 11,
        "name": "Albert Einstein",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/12"
        ],
        "url": "https://rickandmortyapi.com/api/character/11",
        "created": "2017-11-04T20:20:20.965Z"
      },
      {
        "id": 12,
        "name": "Alexander",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Anatomy Park",
          "url": "https://rickandmortyapi.com/api/location/5"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/3"
        ],
        "url": "https://rickandmortyapi.com/api/character/12",
        "created": "2017-11-04T20:32:33.144Z"
      },
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "unknown",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/13",
        "created": "2017-11-04T20:33:30.779Z"
      },
      {
        "id": 14,
        "name": "Alien Morty",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        "url": "https://rickandmortyapi.com/api/character/14",
        "created": "2017-11-04T20:51:31.373Z"
      },
      {
        "id": 15,
        "name": "Alien Rick",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        "url": "https://rickandmortyapi.com/api/character/15",
        "created": "2017-11-04T20:56:13.215Z"
      },
      {
        "id": 16,
        "name": "Amish Cyborg",
        "status": "Dead",
        "species": "Alien",
        "type": "Parasite",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/15"
        ],
        "url": "https://rickandmortyapi.com/api/character/16",
        "created": "2017-11-04T21:12:45.235Z"
      },
      {
        "id": 17,
        "name": "Annie",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Anatomy Park",
          "url": "https://rickandmortyapi.com/api/location/5"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/3"
        ],
        "url": "https://rickandmortyapi.com/api/character/17",
        "created": "2017-11-04T22:21:24.481Z"
      },
      {
        "id": 18,
        "name": "Antenna Morty",
        "status": "Alive",
        "species": "Human",
        "type": "Human with antennae",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Citadel of Ricks",
          "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/28"
        ],
        "url": "https://rickandmortyapi.com/api/character/18",
        "created": "2017-11-04T22:25:29.008Z"
      },
      {
        "id": 19,
        "name": "Antenna Rick",
        "status": "unknown",
        "species": "Human",
        "type": "Human with antennae",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "unknown",
          "url": ""
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        "url": "https://rickandmortyapi.com/api/character/19",
        "created": "2017-11-04T22:28:13.756Z"
      },
      {
        "id": 20,
        "name": "Ants in my Eyes Johnson",
        "status": "unknown",
        "species": "Human",
        "type": "Human with ants in his eyes",
        "gender": "Male",
        "origin": {
          "name": "unknown",
          "url": ""
        },
        "location": {
          "name": "Interdimensional Cable",
          "url": "https://rickandmortyapi.com/api/location/6"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/8"
        ],
        "url": "https://rickandmortyapi.com/api/character/20",
        "created": "2017-11-04T22:34:53.659Z"
      }
    ]
  }

export const MOCK_SWAPI_CHARACTERS = 
  {
    "count": 82,
    "next": "https://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
      {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
      },
      {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [
          "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "https://swapi.dev/api/people/2/"
      },
      {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/8/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [
          "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:11:50.376000Z",
        "edited": "2014-12-20T21:17:50.311000Z",
        "url": "https://swapi.dev/api/people/3/"
      },
      {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
          "https://swapi.dev/api/starships/13/"
        ],
        "created": "2014-12-10T15:18:20.704000Z",
        "edited": "2014-12-20T21:17:50.313000Z",
        "url": "https://swapi.dev/api/people/4/"
      },
      {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female",
        "homeworld": "https://swapi.dev/api/planets/2/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [],
        "created": "2014-12-10T15:20:09.791000Z",
        "edited": "2014-12-20T21:17:50.315000Z",
        "url": "https://swapi.dev/api/people/5/"
      },
      {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:52:14.024000Z",
        "edited": "2014-12-20T21:17:50.317000Z",
        "url": "https://swapi.dev/api/people/6/"
      },
      {
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:53:41.121000Z",
        "edited": "2014-12-20T21:17:50.319000Z",
        "url": "https://swapi.dev/api/people/7/"
      },
      {
        "name": "R5-D4",
        "height": "97",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, red",
        "eye_color": "red",
        "birth_year": "unknown",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/"
        ],
        "species": [
          "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:57:50.959000Z",
        "edited": "2014-12-20T21:17:50.321000Z",
        "url": "https://swapi.dev/api/people/8/"
      },
      {
        "name": "Biggs Darklighter",
        "height": "183",
        "mass": "84",
        "hair_color": "black",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "24BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
          "https://swapi.dev/api/starships/12/"
        ],
        "created": "2014-12-10T15:59:50.509000Z",
        "edited": "2014-12-20T21:17:50.323000Z",
        "url": "https://swapi.dev/api/people/9/"
      },
      {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/20/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/38/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/48/",
          "https://swapi.dev/api/starships/59/",
          "https://swapi.dev/api/starships/64/",
          "https://swapi.dev/api/starships/65/",
          "https://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "https://swapi.dev/api/people/10/"
      }
    ]
  }