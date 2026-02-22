import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_map_back.js";
import { Cache } from "./pokecache.js";
import { commandExplore } from "./command_explore.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};
export type State={
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL :string|null;
    prevLocationsURL :string|null;
}
export function initState():State{
   const rl = createInterface({
   input: process.stdin,
   output: process.stdout,
   prompt: "Pokedex > ",
 });
 const commands:Record<string, CLICommand>={
     exit: {
       name: "exit",
       description: "Exits the pokedex",
       callback: commandExit,
     },
     // can add more commands here
     help: {
       name: "help",
       description: "Displays a help message",
       callback: commandHelp,
     },
      map: {
         name: "map",
         description: "Displays location areas",
         callback: commandMap,
         },
      mapb: {
         name: "mapb",
         description: "Displays previous locations",
         callback: commandMapBack,
         },
        explore : {
         name: "explore ",
         description: "Explore",
         callback: commandExplore,
         },
         
 }
 const cache=new Cache(60000);
 const pokeapi = new PokeAPI(cache);
 const nextLocationsURL= null;
 const prevLocationsURL= null;
 return {
    rl,
    commands,
    pokeapi,
    nextLocationsURL,
    prevLocationsURL
 }; 
}