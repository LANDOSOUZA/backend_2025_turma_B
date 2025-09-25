/* 
   Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
   publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro
   no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
*/

let anoAtual = new Date().getFullYear(); // obtém o ano atual

let livro = {
    titulo: "Lando, O Mestre do Tabuleiro",
    autor: "L. C. S. Souza",
    anoPublicacao: 2017,
    genero: "Raciocínio Lógico",
    idadePublicacao: 0,
    avaliacao: 'O livro é excelente' // exemplo de avaliação inicial
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao; // calcula a idade de publicação

console.log("Detalhes do livro (antes de excluir a avaliação):");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log("Idade de Publicação:", livro.idadePublicacao, "anos");
console.log("Avaliação:", livro.avaliacao);

// Exclui a propriedade avaliacao do objeto livro
delete livro.avaliacao;
console.log("\nDetalhes do livro (após excluir a avaliação):");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log("Idade de Publicação:", livro.idadePublicacao, "anos");
console.log("Avaliação:", livro.avaliacao); // deve exibir undefined, pois a propriedade foi excluída