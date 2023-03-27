/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/
const num1 = 3;
const num2 = 11;

function lerNum(numero){
    switch (numero) {
        case 1:
            console.log('Número Um');
            break;
        case 2:
            console.log('Número Dois');
            break;
        case 3:
            console.log('Número Três');
            break;
        case 4:
            console.log('Número Quarto');
            break;
        case 5:
            console.log('Número Cinco');
            break;
        case 6:
            console.log('Número Seis');
            break;
        case 7:
            console.log('Número Sete');
            break;
        case 8:
            console.log('Número Oito');
            break;
        case 9:
            console.log('Número Nove');
        case 10:
            console.log('Número Dez');
            break;
        default:
            console.log('Número fora do intervalo aceito');
            break;
    }
}

lerNum(num1);
lerNum(num2);