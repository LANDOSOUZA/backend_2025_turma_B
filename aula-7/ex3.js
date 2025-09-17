// Exemplo da fruta
class Fruta{
    // cria o construtor da classe
    constructor(){        
        this.sabor = "Doce";
        this.nome = "Laranja";
        this.cor = "Verde";
        this.peso = 400;
        this.diasdesdecolheta = 5;
        this.ismadura = null; // o atributo pode ser opcional, inicializando com null
    }

    // criação do método para exibir informações

    madura(diasparaMadura){
        if(this.diasparaMadura >= this.diasdesdeacolheta){
            this.ismadura = true;
            console.log(`A fruta ${this.nome} está madura.`);
        }
        else{
            this.ismadura = false;
            console.log(`A fruta ${this.nome} não está madura.`);
        }
    }

}


// Instaniando o objeto

Laranja = new Fruta(); // cria o objeto Laranja a partir da classe Fruta
Laranja.madura(4);