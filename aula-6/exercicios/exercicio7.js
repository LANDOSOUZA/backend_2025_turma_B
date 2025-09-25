// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de
// publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no
// console os detalhes do livro.

let anoAtual = new Date().getFullYear(); // obtém o ano atual

let livro = {
    titulo: "Lando, O Mestre do Tabuleiro",
    autor: "L. C. S. Souza",
    anoPublicacao: 2017,
    genero: "Raciocínio Lógico",
    idadePublicacao: 0
};

livro["idadePublicacao"] = anoAtual - livro["anoPublicacao"]; // atualiza a idade

console.log("Detalhes do livro:");
console.log("Título:", livro["titulo"]);
console.log("Autor:", livro["autor"]);
console.log("Ano de Publicação:", livro["anoPublicacao"]);
console.log("Gênero:", livro["genero"]);
console.log("Idade de Publicação:", livro["idadePublicacao"], "anos");
 

  