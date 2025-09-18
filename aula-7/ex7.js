// Capturando informações digitadas pelo usuário


readline = require('readline');
// cria a interface de leitura
const rl = readline.createInterface({
    // pega a variável de process para entrada stdin
    input: process.stdin,
    // pega a variável de process para saída std
    output: process.stdout
});


// Cria array para armazenar o histórico das respostas
let historico=[];
// função que pergunta em loop
function perguntar() {
    rl.question("Digite algo ou 'sair' para encerrar)", (resposta)=>{
        if(resposta.toLowerCase() === 'sair') {
            console.log("Programa encerrado");
            console.log('Histórico de respostas');
            historico.forEach((item, i)=>{
                console.log(`${i+1}: ${item}`); 
            }); // fecha a interface de dados
            rl.close();

        } else {
            historico.push(resposta); // adiciona a resposta ao histórico
            console.log('Você digitou: ${resposta}');
            perguntar(); // chama a função novamente para nova pergunta
        }
    });
}


perguntar(); // chama a função pela primeira vez