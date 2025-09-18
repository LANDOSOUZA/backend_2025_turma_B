// Exemplo de Herança

class Usuario {
    constructor() {
        this.nome=null;
        this.idade=null;
    }
    exibir_infor(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}


    // Cria a classe filha
class cliente extends Usuario {
        constructor() {
            super(); // super faz a classe filha herdar os atributos e métodos da classe pai
            this.cargo = null; // cria o atributo cargo para a classe cliente
        }
        exibir_infor(){
            console.log(`Nome: ${this.nome}`);
            console.log(`Idade: ${this.idade}`);
            console.log(`Cargo: ${this.cargo}`);
        }
    }

    Daniel = new cliente(); // cria o objeto Daniel a partir da classe cliente
    Daniel.nome = "Daniel";
    Daniel.idade = 30;
    Daniel.cargo = "Professor";

    Rocky = new cliente(); // cria o objeto Rocky a partir da classe cliente
    Rocky.nome = "Rocky";
    Rocky.idade = 3;
    Rocky.cargo = "Pet";
    Daniel.exibir_infor(); // exibe as informações do objeto Daniel (todas indefinidas)
    Rocky.exibir_infor(); // exibe as informações do objeto Rocky (todas indefinidas)

