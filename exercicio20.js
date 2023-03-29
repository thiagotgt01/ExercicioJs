/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

const saque1 = 19;
const saque2 = 1455;

function saqueCaixa(valor) {
    let cem =0;
    let cinquenta=0;
    let dez=0;
    let cinco=0;
    let um=0;

    while (valor != 0) {
        if(valor%100 == 0){
            cem +=1;
            valor -= 100;
        }else if (valor%50 == 0) {
            cinquenta +=1;
            valor -= 50;
        }else if(valor%10 == 0){
            dez +=1;
            valor -= 10;
        }else if(valor%5 == 0){
            cinco +=1;
            valor -= 5;
        }else if (valor%1 == 0) {
            um +=1;
            valor -= 1;
        }
    }
    return `${cem} nota(s) de R$ 100. ${cinquenta} nota(s) de R$ 50. ${dez} nota(s) de R$ 10. ${cinco} nota(s) de R$ 5. ${um} nota(s) de R$ 1`;

}

console.log(saqueCaixa(saque1));
console.log(saqueCaixa(saque2));


