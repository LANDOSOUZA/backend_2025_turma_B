// Exemplo de função

let n1 = 20, n2 = 50; // declaração de constantes
let res1, res2; // declaração de variáveis

//função 1
function soma(){
    res1 = n1 + n2;
    console.log(res1);
    n1 = 15;
    n2 = 40;
    res1 = n1 + n2;
    console.log(res1);
}

soma();

// Função 2 - multiplicação

function mult(){
    n1 = 5;
    n2 = 8;
    res2 = 21 * n2;
    console.log(n1, n2, res2)
}

mult();