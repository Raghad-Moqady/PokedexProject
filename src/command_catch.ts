import { State } from "./state.js";

export async function commandCatch(state: State, ...args:string[]):Promise<void>{
  if (!args[0]) {
    console.log("Please provide a Pokemon name.");
    return;
  } 
  console.log(`Throwing a Pokeball at ${args[0]}...`);
  const data=await state.pokeapi.fetchPokemonInfo(args[0]);

 
    
    const catchProbability = data.base_experience ;

    if (Math.random() < catchProbability) {
      console.log(`${data.name} was caught!`);
      state.pokedex[data.name] = data;
    } else {
      console.log(`${data.name} escaped!`);
    }
   
  
}