/*
29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

const num =[3,2,1,55,4,13,20,10,28,18,99,19,13];

function contador(numArray) {
    let numerosForaDaRegra=0;
    numArray.forEach(numero => {
        if(!(numero >= 10 && numero <= 20)){
            numerosForaDaRegra += 1;
        }
    });

    return `Quantidade de numeros fora do intervalo ${numerosForaDaRegra}`
}

console.log(contador(num));