import axios from "axios"
import { resourceLimits } from "worker_threads";
import { JSONValue } from '../data/types'

export async function fetchCharacters() {
  try {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const data = await result.json()
    // make interface for data.results
    return data.results
  } catch (error) {   
    throw error
  }
}

export async function fetchSwapi() {
  try {
    const results = await axios.get<JSONValue>('https://swapi.dev/api/people/')
    return await results.json()
  } catch (error) {
    throw error
  }

}