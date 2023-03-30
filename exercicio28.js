/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

const numImpares =[3,2,4,5,12,9,28,32,68,69,104,123];

function numeros(arrayNumeros) {
    let pares=0;
    let impares=0;
    arrayNumeros.forEach(numero => {
        if(numero%2 ==0){
            pares+=1;
        }else{
            impares+=1;
        }
    });

    return `Numeros pares :${pares} e numeros ímpares :${impares}`;
}

console.log(numeros(numImpares));