/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

const cri1 = [1.72,1];
const cri2 = [1.10,3];

const criancaAltura = (crianca1, crianca2) => {
    let menorCrianca = Math.min([crianca1[0],crianca2[0]]);
    let ano=0;

    if (crianca2[0] > crianca1 [0]) {
        while (crianca2[0] > crianca1[0]) {
                crianca2[0] = crianca2[0] + (12 * (crianca2[1] / 100))
                crianca1[0] = crianca1[0] + (12 * (crianca1[1] / 100))
                ano += 1;
            }
    }else if(crianca1[0] > crianca2[0]){
        while (crianca2[0] > crianca1[0]) {
            crianca2[0] = crianca2[0] + (12 * (crianca2[1] / 100))
            crianca1[0] = crianca1[0] + (12 * (crianca1[1] / 100))
            ano += 1;
        }
    }

    return `a menor criança ultrapassará a maior em ${ano} anos.`;

};

console.log(criancaAltura(cri2,cri1));