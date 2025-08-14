// Armazenando informações digitadas pelo usuário

let readline = require(`readline`); //biblioteca que permite armazenar informações digitadas pelo usuário
// Cria uma interface de leitura
const rl = readline.createInterface({
    input:process.stdin, //process.stdin gerencia processso de entrada do node
    output:process.stdout //process.stdout gerencia processo de saída do node.
});

//Pergunta ao usuário
rl.question("Digite algo: ",(answer)=>{
// Resposta do usuário
console.log(`Você digitou ${answer}`);
rl.close(); // fecha a caixa de pergunta

});

console.log(readline);