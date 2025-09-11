// Exemplo de objeto com lista de objetos

const dadoP = {
    nome: 'Daniel',
    idade: 30,
    endereco: [
        {
            rua: 'Av. Brasil',
            numero: 77
        },
        {
            rua: 'Av. Cícero Canuto',
            numero: 200
        }
    ]
}

// Exibe o objeto completo
console.log(dadoP)

// Acessa os atributos dos endereços
console.log(dadoP.endereco[0].rua)    // Av. Brasil
console.log(dadoP.endereco[0].numero) // 77
console.log(dadoP.endereco[1].rua)    // Av. Cícero Canuto
console.log(dadoP.endereco[1].numero) // 200
