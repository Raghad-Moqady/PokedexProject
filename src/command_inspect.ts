import { State } from "./state.js";

export async function commandInspect(state: State, ...args:string[]):Promise<void>{
  if (!args[0]) {
    console.log("Please provide a Pokemon name.");
    return;
  } 
  const data=await state.pokeapi.fetchPokemonInspect(args[0]);
  if(!data){
      console.log("you have not caught that pokemon");  
      return; 
  }
 
  console.log(`Name: ${data?.name}`);
  console.log(`Height: ${data?.height}`);
  console.log(`Weight: ${data?.weight}`);
  console.log(`Stats:`);
  data?.stats.forEach((s)=>{
    console.log(`-${s.stat.name}: ${s.base_stat}`);
  });
  console.log("Types:")
  data?.types.forEach((t)=>{
   console.log(`- ${t.type.name}`);
  }); 
  
}