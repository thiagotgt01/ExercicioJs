/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

const num =[3,2,1,55,4,13,20,10,28,18,99,19,13];

function numerosMaiorMenor(arrayNum) {
    let maiorNum = Math.max(arrayNum);
    let menorNum = Math.min(arrayNum);
    
    return `Maior numero ${maiorNum} e menor nunmero ${menorNum} do array`;
}
