// Cria um objeto

let carro = {
    nome: 'Jeep',
    cor: 'vermelho'
    ano: 2022,
    velocidade:function(){
        return this.nome + '150 km/h';
    }
};
console.log(carro); // exibe o objeto carro 
console.log(carro.velocidade()); // chama o método velocidade do objeto carro


// Cria uma classe
class carro1 {
    nome = 'Jeep';
    ano = 2024;
    cor = 'azul';
}

jeep = new carro1(); // cria um novo objeto jeep da classe carro1
console.log(jeep); // exibe o objeto jeep
