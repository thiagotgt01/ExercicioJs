/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/
const salario1 = 1455;

function calculoNovoSalario(planoTrabalho,salarioAtual) {
    switch (planoTrabalho) {
        case 'A':
            console.log('Seu novo salário é '+ (salarioAtual + salarioAtual*0.1));
            break;
        case 'B':
            console.log('Seu novo salário é '+ (salarioAtual + salarioAtual*0.15));
            break;
        case 'C':
            console.log('Seu novo salário é '+ (salarioAtual + salarioAtual*0.2));
            break;
        default:
            break;
    }
}

calculoNovoSalario('A',salario1);
calculoNovoSalario('B',salario1);
calculoNovoSalario('C',salario1);