import { State } from "./state.js";

export async function commandExplore(state: State, ...args:string[]):Promise<void>{
    if (!args[0]) {
    console.log("Please provide a location area name.");
    return;
    } 
  const data=await state.pokeapi.fetchLocation(args[0]);
  console.log(`Exploring ${args[0]}...`);
  console.log("Found Pokemon:");

  data.pokemon_encounters.forEach((p) => {
    console.log(` - ${p.pokemon.name}`);
  });
}

 