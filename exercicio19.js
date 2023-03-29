/*
19)
 O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const compra1 = [400,2];
const compra2 = [300,2];
const compra3 = [900,3];

function compraLanche(params) {
    switch (params[0]) {
        case 100:
            console.log(params[1]+' cachorro quente, total R$'+(3*params[1]) );
            break;
        case 200:
            console.log(params[1]+' Hambúrguer Simples, total R$'+(4*params[1]) );
            break;
        case 300:
            console.log(params[1]+' Cheeseburguer, total R$'+(5.5*params[1]) );
            break;
        case 400:
            console.log(params[1]+' Bauru, total R$'+(7.5*params[1]) );
            break;
        case 500:
            console.log(params[1]+' Refrigerante, total R$'+(3.5*params[1]) );
            break;
        case 600:
            console.log(params[1]+' Suco, total R$'+(2.8*params[1]) );
            break;
        default:
            console.log('produto não existente');
            break;
    }
}

compraLanche(compra1);
compraLanche(compra2);
compraLanche(compra3);