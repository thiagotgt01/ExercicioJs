/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorInteiro = [2,3,5,6];
const vetorString = ['Pão','Queijo','Pizza','Ovo'];
const vetorDouble = [1.99, 2.50, 11.25, 30.75];

console.log(vetorDouble.concat(vetorInteiro,vetorString));
console.log(vetorInteiro.concat(vetorDouble).concat(vetorString));


