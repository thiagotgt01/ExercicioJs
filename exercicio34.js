/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function comparadorString(str1 = '',str2= '') {

    return str1.toLowerCase().includes(str2.toLowerCase()) || str2.toLowerCase().includes(str1.toLowerCase());
}
console.log(comparadorString('ca','casamento'));
console.log(comparadorString('pizza','PizZa'))
console.log(comparadorString('Carro','Carrinho'))