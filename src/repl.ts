import readline from "readline";

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
    if (arr.length==0) rl.prompt();
    else{
    console.log(`Your command was: ${arr[0]}`);
    rl.prompt();
    }
   
})
}
