// Permitindo que o usuário degite informações

// Cria uma variável chamada readline.
let readline = require('readline');
const rl = readline.createInterface({
    // pega a variável de process para entrada stdin
    input: process.stdin,
    // pega a variável de process para saída std
    output: process.stdout
});


// pergunta ao usuário
rl.question("Digite algo: ", (answer)=>{
    console.log(`Você digitou: ${answer}`);
    rl.close(); // fecha a interface de dados
});
