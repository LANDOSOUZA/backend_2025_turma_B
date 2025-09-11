// exemplo com array utilizando o slice para fatiar o array
nomes = ['Daniel', 'Bruna', 'Camila', 'Júlia'];
console.log(nomes);                     // exibe a lista de nomes

nomes.splice(1, 1, 'Viviane');          // remove 1 elemento a partir do índice 1 e adiciona 'Viviane'
console.log(nomes);                     // exibe a lista de nomes

const nomes2 = nomes.slice(1, 3);       // cria um novo array com elementos do índice 1 ao 2 (3 não incluído)
console.log(nomes2);                    // exibe a nova lista de nomes

const tamanho = nomes.length;           // obtém o tamanho do array
console.log(tamanho);                   // exibe o tamanho do array

console.log('Print forEach');
// forEach itera os elementos do array
nomes.forEach(function(nomes, index) {
    console.log(index, nomes);
});

// for
console.log('Print com for');
for(i=0;i<nomes.length;i++){
    console.log(`${i} ${nomes[i]}`);
}