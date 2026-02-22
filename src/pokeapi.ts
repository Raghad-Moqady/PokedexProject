import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache :Cache;

  constructor(cache:Cache) {
     this.cache=cache;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const cachedData = this.cache.get<ShallowLocations>(url);
    if (cachedData) {
      console.log("Using cache for:", url);
      return cachedData;
    }
    const response = await fetch(url);
    const data:ShallowLocations = await response.json();
    this.cache.add(url,data);
    return data;
  }

  // async fetchLocation(locationName: string): Promise<Location> {
  //    const url = `${PokeAPI.baseURL}/location/${locationName}`;
  //   const cachedData = this.cache.get<Location>(url);
  //    if (cachedData) {
  //     console.log("Using cache for:", url);
  //     return cachedData;
  //   }
  //    const response= await fetch(url);
  //    const data:Location = await response.json();
  //     this.cache.add(url,data);
  //    return data;
  // }
 
    async fetchLocation(areaName: string): Promise<LocationArea> {
    const url = `${PokeAPI.baseURL}/location-area/${areaName}`;

    const cachedData = this.cache.get<LocationArea>(url);
    if (cachedData) {
      console.log("Using cache for:", url);
      return cachedData;
    }

    const response = await fetch(url);
    const data: LocationArea = await response.json();

    this.cache.add(url, data);
    return data;
  }
  async fetchPokemonInfo(name: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${name}`;

    const cachedData = this.cache.get<Pokemon>(url);
    if (cachedData) {
      console.log("Using cache for:", url);
      return cachedData;
    }

    const response = await fetch(url);
    const data: Pokemon = await response.json();

    this.cache.add(url, data);
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

//غير مستخدم لحد الان 
// export type Location = {
//    areas: 
//     {
//       name: string,
//       url: string
//     }[]
//   ,
//   game_indices: 
//     {
//       game_index: number,
//       generation: {
//         name: string,
//         url: string
//       }
//     }[]
//     ,
//   id: number,
//   name: string,
//   names: 
//     {
//       language: {
//         name: string,
//         url: string
//       },
//       name: string
//     }[]
//   ,
//   region: {
//     name:string,
//     url: string
//   }
// };

export type LocationArea = {
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

export type Pokemon={
  id: number;
  name: string;
  base_experience: number;
  types: string[];
}