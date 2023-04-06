/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/
const numeros = [2,1,5,-2,9,10,2];
const numMedia = numeros.reduce((value1,value2) => value1+value2) / numeros.length;
console.log(numMedia.toFixed(2));