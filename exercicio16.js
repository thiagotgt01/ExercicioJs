/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica.O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/
const tipoDeCalculo1 = '+';
const tipoDeCalculo2 = '-';
const tipoDeCalculo3 = '*';
const tipoDeCalculo4 = '/';

function calculadora(valor1,tipoDeOperacao,valor2){
    switch (tipoDeOperacao) {
        case '+':
            console.log('soma :'+ (valor1+valor2));
            break;
        case '-':
            console.log('subtração: '+ (valor1-valor2));
            break;
        case '*':
            console.log('multiplicação: '+ (valor1*valor2));
            break;
        case '/':
            console.log('divisão: '+ (valor1/valor2));
            break;
        case '%':
            console.log('resto: '+ (valor1%valor2));
            break;
        default:
            console.log('Tipo de operação inválida');
            break;
    }
}

calculadora(2,tipoDeCalculo1,2);
calculadora(2,tipoDeCalculo2,2);
calculadora(2,tipoDeCalculo3,2);
calculadora(2,tipoDeCalculo4,2);
