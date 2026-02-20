import readline from "readline";
import { commandExit } from "./command_exit.js";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
   return input
    .trim()
    .toLowerCase()
    .split(/\s+/);
} 

export function startREPL(){
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});
rl.prompt();
rl.on("line", (line)=>{
    const arr= cleanInput(line); // ["",""]
    if (arr.length===0){
      rl.prompt();
      return;  
    } 
    const commands = getCommands();
    const commandWord= arr[0];
    const target= commands[commandWord];
    if(target){
     try{
       target.callback(commands);
     }catch(err){
       throw new Error("Error!");
     }
    }else{
      console.log("Unknown command");
    }
    rl.prompt(); 
})
}
