/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A
*/
const nota1 = [4.5,7,9.5];
const conceitoNota = (vetorNotas = []) => {
    vetorNotas.forEach(nota => {
        if (nota >= 0 && nota < 4.9) {
            console.log(`${nota} conceito D.`);
        } else if(nota >5 && nota <= 6.9) {
            console.log(`${nota} conceito C.`);
        } else if(nota >=7 && nota <= 8.9) {
            console.log(`${nota} conceito B.`);
        } else if(nota >=9 && nota <= 10) {
            console.log(`${nota} conceito A.`);
        }
    })
}
conceitoNota(nota1);