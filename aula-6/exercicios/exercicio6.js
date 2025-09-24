// Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()).
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro
// foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de
// publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação,
// são exibidas corretamente.

let anoAtual = new Date().getFullYear(); // obtém o ano atual

let livro = {
    titulo: "Lando, O Mestre do Tabuleiro",
    autor: "L. C. S. Souza",
    anoPublicacao: 2017,
    genero: "Raciocínio Lógico",
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao; // calcula a idade de publicação

console.log("Detalhes do livro:");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log(`Idade de Publicação: ${livro.idadePublicacao} anos`); // exibe a idade de publicação