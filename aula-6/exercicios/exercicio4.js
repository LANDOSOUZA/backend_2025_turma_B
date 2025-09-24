// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que
// representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de
// animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

let clinica = []; // criação de um array vazio para representar a fila de animais na clínica

// Simulação da chegada de três animais diferentes
clinica.push("Cachorra - Sissi");

clinica.push("Gato - Zigo");
clinica.push("Papagaio - Odorico");

console.log("Animais na clínica após a chegada:", clinica); // exibe a lista de animais na clínica

// Remoção dos animais da lista um por vez
clinica.shift(); // remove o primeiro animal (Cachorra - Sissi)
console.log("Animais na clínica após a remoção de um animal:", clinica); // exibe a lista após a remoção

clinica.shift(); // remove o segundo animal (Gato - Zigo)
console.log("Animais na clínica após a remoção de mais um animal:", clinica); // exibe a lista após a remoção

clinica.shift(); // remove o terceiro animal (Papagaio - Odorico)
console.log("Estado final da lista de animais na clínica:", clinica); // exibe o estado final da lista (deve estar vazia)