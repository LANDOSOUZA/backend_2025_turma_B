// exemplo de objeto em JavaScript
// Criando objeto pessoa
let pessoa={
    nome: 'Daniel',
    idade: 30,
    profissao: 'Professor Universitário',
    saudacao: function(){
        console.log(`Olá! Seja bem-vindo ${this.nome}`);
    }
}
console.log(pessoa) // exibe o objeto pessoa
console.log(pessoa.profissao) // acessa o atributo nome do objeto pessoa
console.log(pessoa.saudacao())// chama o método saudacao do objeto pessoa
