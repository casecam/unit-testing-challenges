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