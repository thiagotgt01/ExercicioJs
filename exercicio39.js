/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/
const fun = (vetorA =[],vetorB=[]) => {
    if(vetorA.length == vetorB.length){
        console.log(`vetorA: ${vetorA}`);
        console.log(`vetorB: ${vetorB}`);
        console.log(`Trocando valores entre vetores`);
        for(let i=0;i<vetorB.length;i++){
            vetorA.push(vetorB[i]);
        }
        vetorB = [];
        for(let i=0;i<(vetorA.length/2);i++){
            vetorB.push(vetorA[i]);
        }
        for(let i=0;i <vetorB.length;i++){
            vetorA.shift();
        }
        console.log(`vetorA: ${vetorA}`);
        console.log(`vetorB: ${vetorB}`);
    }else{
        console.log('os vetores não possuem o mesmo tamanho.');
    }
}
const a = [1,2,3,4,6,4,3,2,1];
const b = ['um','dois','tres','quatro',false,'pao','abacaxi','uva',true];

fun(a,b);

const c = [1,2,3,4,6,4,3,2,1,1,2,4,5,1,2,9];
const d = ['um','dois','tres','quatro',false,'pao','abacaxi','uva',true];

fun(c,d);