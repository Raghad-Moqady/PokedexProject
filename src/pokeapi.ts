export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
     const url = `${PokeAPI.baseURL}/location/${locationName}`;
     const response= await fetch(url);
     const data = await response.json();
     return data;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
   areas: 
    {
      name: string,
      url: string
    }[]
  ,
  game_indices: 
    {
      game_index: number,
      generation: {
        name: string,
        url: string
      }
    }[]
    ,
  id: number,
  name: string,
  names: 
    {
      language: {
        name: string,
        url: string
      },
      name: string
    }[]
  ,
  region: {
    name:string,
    url: string
  }
};