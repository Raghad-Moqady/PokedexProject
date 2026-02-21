//we dont use this file
import { CLICommand } from "./command.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapBack } from "./command_map_back.js";

export function getCommands(): Record<string, CLICommand> {
  return {
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
  };
}