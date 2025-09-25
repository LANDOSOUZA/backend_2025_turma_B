/*
Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
publicação. Depois altere o gênero do livro para "Aventura".
*/

let anoAtual = new Date().getFullYear(); // obtém o ano atual

let livro = {
    titulo: "Lando, O Mestre do Tabuleiro",
    autor: "L. C. S. Souza",
    anoPublicacao: 2017,
    genero: "Raciocínio Lógico",
    idadePublicacao: 0
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao; // calcula a idade de publicação

console.log("Detalhes do livro:");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero (antes da alteração):", livro.genero);
console.log("Idade de Publicação:", livro.idadePublicacao, "anos");

// Altera o gênero do livro para "Aventura"
livro.genero = "Aventura";
console.log("Gênero (após a alteração):", livro.genero);