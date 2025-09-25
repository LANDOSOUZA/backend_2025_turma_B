// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
// publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser
// inicializada como null.
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

let anoAtual = new Date().getFullYear(); // obtém o ano atual

let livro = {
    titulo: "Lando, O Mestre do Tabuleiro",
    autor: "L. C. S. Souza",
    anoPublicacao: 2017,
    genero: "Raciocínio Lógico",
    idadePublicacao: 0,
    avaliacao: null // inicializa a propriedade avaliacao como null
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao; // calcula a idade de publicação

console.log("Detalhes do livro:");
console.log("Título:", livro["titulo"]);
console.log("Autor:", livro["autor"]);
console.log("Ano de Publicação:", livro["anoPublicacao"]);
console.log("Gênero:", livro["genero"]);
console.log("Idade de Publicação:", livro["idadePublicacao"], "anos");

// Adiciona uma avaliação ao objeto livro
let novaAvaliacao = 'O livro é excelente'; // exemplo de nova avaliação a ser adicionada

if (livro.avaliacao === null) { // verifica se a propriedade avaliacao é null
    livro.avaliacao = novaAvaliacao; // atribui a nova avaliação ao objeto livro
    console.log("Avaliação adicionada ao livro:", livro.avaliacao);
}

