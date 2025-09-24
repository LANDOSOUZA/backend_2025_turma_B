// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no
// console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento
// do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

let meuArray = []; // criação de um array vazio
meuArray.push(5); // adiciona o primeiro número inteiro
meuArray.push(10); // adiciona o segundo número inteiro
meuArray.push(15); // adiciona o terceiro número inteiro
console.log("Array após adicionar os números:", meuArray); // exibe o array após adicionar os números

meuArray[0] = meuArray[0] * 2; // substitui o primeiro elemento pelo dobro do seu valor atual
console.log("Array após dobrar o primeiro elemento:", meuArray); // exibe o array atualizado

