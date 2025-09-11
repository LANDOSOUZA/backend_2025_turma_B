// Exemplo de classe com o construtor

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }   
saudacao() {
    return `Olá, meu nome é ${this.nome}`;
}
}


// Criar uma instância da classe Pessoa
let pessoa1 = new Pessoa('Rock', 3);
let pessoa2 = new Pessoa('Karina', 46);

