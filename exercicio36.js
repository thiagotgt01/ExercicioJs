/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/
const vetorNum = [2,4,6,8];
const func1 = (vetor=[],numero=0) => vetor.map((value) => value*numero);
const func2 = (vetor=[],numero=0) =>{
    
    return vetor.filter((num) => num > 5).map((num) => num* numero) 
}
console.log(func1(vetorNum,2));
console.log(func2(vetorNum,2));