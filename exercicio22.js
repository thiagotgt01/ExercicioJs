/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação.  A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.
*/

const mesDoPagamento1 = 3;


function pagamentoAnuidade(mesPagamento) {
    let valorAnuidade = 29.90;
    let taxaJuros = 0.05;
    let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    let valorPagamento = valorAnuidade*Math.pow((taxaJuros+1),(mesPagamento - 1));
    switch (mesPagamento) {
        case 1:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 2:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 3:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 4:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 5:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 6:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 7:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 8:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 9:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 10:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 11:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        case 12:
            console.log(`Pagamento realizado em ${meses[(mesPagamento-1)]} no total de R$${valorPagamento.toFixed(2)}.`);
            break;
        default:
            console.log('Mês inválido.');
            break;
    }


}

pagamentoAnuidade(1);
pagamentoAnuidade(12);
pagamentoAnuidade(7);
pagamentoAnuidade(10);
pagamentoAnuidade(3);
