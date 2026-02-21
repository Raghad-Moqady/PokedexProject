import { State } from "./state";

export async function commandMap(state:State){
   const data=await state.pokeapi.fetchLocations(state.nextLocationsURL??undefined);
    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
 
    data.results.forEach((r)=>{
      console.log(r.name);
    });
}