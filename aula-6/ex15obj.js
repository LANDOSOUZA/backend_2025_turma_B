// Exemplo de objeto com mais de um json

dadoP={
    nome: 'Danel',
    idade: 30,
    endereco: {
        Rua: 'Av. Brasil',
        numero: 77,
    }
}

console.log(dadoP) // exibe o objeto dadoP
console.log(dadoP.endereco.Rua,dadoP.endereco.numero) // acessa o atributo Rua do objeto dadoP