/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function pa (numTermo,primeiroTermo,razao){
    let termos = [primeiroTermo];
    let somaTotal = primeiroTermo;
    for(let i=0;i<numTermo;i++){
        somaTotal += razao;
        termos.push(somaTotal);
    }
    return `todos os ${numTermo} termos : ${termos} \nsoma de todos os termos ${somaTotal}`;
}
console.log(pa(4,2,5));

function pg(numTermo,primeiroTermo,razao) {
    let termos = [primeiroTermo];
    let somaTotal = primeiroTermo;
    for(let i=0;i<numTermo;i++){
        somaTotal *= razao;
        termos.push(somaTotal);
    }
    return `todos os ${numTermo} termos : ${termos} \nsoma de todos os termos ${somaTotal}`;
}
console.log(pg(4,2,5));