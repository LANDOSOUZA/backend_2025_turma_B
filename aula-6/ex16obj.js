// Exemplo de objeto com lista de objetos

dadoP={
    nome: 'Daniel',
    idade: 30,
endereco: {
    Rua: 'Av. Brasil',
    numero: 77,
},
{ Rua: 'Av. Cícero Canuto',
    numero: 200,
}
}
}

console.log(dadoP) // exibe o objeto dadoP
console.log(dadoP.endereco[0].Rua) // acessa o atributo Rua do objeto dadoP
console.log(dadoP.endereco[0].numero) // acessa o atributo numero do objeto dadoP
console.log(dadoP.endereco[1].Rua) // acessa o atributo Rua do objeto dadoP
console.log(dadoP.endereco[1].numero) // acessa o atributo numero do objeto dadoP