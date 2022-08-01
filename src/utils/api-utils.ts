import axios from "axios"
import { RickAndMortyRespose, SWAPIResponse } from '../data/types'

export async function fetchCharacters() {
  try {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const data = await result.json()
    return data.results as RickAndMortyRespose
  } catch (error) {   
    throw error
  }
}

export async function fetchSwapi() {
  try {
    const results = await axios.get('https://swapi.dev/api/people/')
    return results.data.results as SWAPIResponse
  } catch (error) {
    throw error
  }
}
