export type Item = {
  id: number;
  name: string;
  amount: number;
  price: number;
  description: string;
  inStock: boolean;
}

export interface SWAPIResponse  {
  "count": number,
  "next": string | null,
  "previous": string | null,
  "results": SWAPIResponseObject[]
}

export interface SWAPIResponseObject {
    "name": string, 
    "height": "172", 
    "mass": "77", 
    "hair_color": string, 
    "skin_color": string, 
    "eye_color": string, 
    "birth_year": string, 
    "gender": string, 
    "homeworld": string, 
    "films": string[], 
    "species": [], 
    "vehicles": string[],
    "starships": string[], 
    "created": string,
    "edited": string, 
    "url": string,
}

export type JSONValue =
| string
| number
| boolean
| JSONObject
| JSONArray

interface JSONObject {
[x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

export interface IChangeKeysObj { evens: number, odds: number }
