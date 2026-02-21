import { State } from "./state.js";

export function cleanInput(input: string): string[] {
   return input
    .trim()
    .toLowerCase()
    .split(/\s+/);
} 

export function startREPL(state:State){
state.rl.prompt();
state.rl.on("line", (line)=>{
    const arr= cleanInput(line); // ["",""]
    if (arr.length===0){
      state.rl.prompt();
      return;  
    } 
    const commandWord= arr[0];
    const target= state.commands[commandWord];
    if(target){
     try{
       target.callback(state);
     }catch(err){
       throw new Error("Error!");
     }
    }else{
      console.log("Unknown command");
    }
    state.rl.prompt(); 
})
}
