// função filter

const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // exibe o array com os números pares

//forma de cálcular o resto da divisão de um número por 2

num = numeros % 2;
if(num===0){
    console.log(num);
}