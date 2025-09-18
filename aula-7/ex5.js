// Exemplo de herança

class Animal {
    constructor() {
        this.nome = null;
        this.idade = null;
    }
    // Método da classe base
    fazerSom() {
    console.log(`${this.nome} faz um som`);
    }
}


// Cria a classe filha
class Cachorro extends Animal {
    constructor() {
        super(); // super faz a classe filha herdar os atributos e métodos da classe pai
        this.raca = null; // cria o atributo raca para a classe Cachorro
    }


    fazerSom() {
        console.log(`${this.nome} um ${this.raca} late`);
    }

    //Exibe as informações do cachorro
    exibir_infor(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Raça: ${this.raca}`);
    }
}


// Instanciando o objeto

// Cria a classe animal
class Gato extends Animal {
    constructor(nome) {
        super(nome); // super faz a classe filha herdar os atributos e métodos da classe pai
    }

    fazerSom() {
        console.log(`${this.nome} mia Miau!`);
    }

}



// Classe Tigre herdando de Animal
class Tigre extends Animal {
    constructor() {
        super(); // super faz a classe filha herdar os atributos e métodos da classe pai
        this.cor = null; // cria o atributo ambiente para a classe Tigre
    }

    fazerSom() {
        console.log(`Tigre ${this.nome} Aaar ruge!`);
        console.log(`Tigre ${this.idade} tem a cor ${this.cor}`);
    }
}

Rocky = new Cachorro();
Rocky.nome = "Rocky";
Rocky.idade = 3;
Rocky.raca = "Amstaff";
Rocky.exibir_infor();
Rocky.fazerSom(); // Saída: Rocky late


// Instanciando o objeto Gato
Garfield = new Gato();
Garfield.nome = "Garfield";
Garfield.idade = 3;
Garfield.fazerSom(); // Saída: Mingau mia Miau!

// Instanciando o objeto Tigre
Memphis = new Tigre();
Memphis.nome = "Menphis";
Memphis.idade = 30;
Memphis.cor = "Branco";


