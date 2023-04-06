/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

const numeros = [1,-4,6,-3,-10,-99,100];

const numNegativo = numeros.filter((num) => num < 0).length;
console.log(numNegativo)