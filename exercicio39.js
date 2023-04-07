/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/
const fun = (vetorA =[],vetorB=[]) => {
    if(vetorA.length == vetorB.length){
        console.log(`vetorA: ${vetorA}`);
        console.log(`vetorB: ${vetorB}`);
        
        for(let i=0;i<vetorA;i++){
            
        }


    }else{
        console.log('os vetores não possuem o mesmo tamanho.');
    }
}
const a = [1,2,3,4];
const b = ['um','dois','tres','quatro'];
fun(a,b);