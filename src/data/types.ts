export type Item = {
  id: number;
  name: string;
  amount: number;
  price: number;
  description: string;
  inStock: boolean;
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
