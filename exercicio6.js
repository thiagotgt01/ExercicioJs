/*
06) Elabore duas funções que recebem três parâmetros: capital inicial,
taxa de juros e tempo de aplicação. A primeira função retornará o montante
 da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

//2 func 

var capInicial;
const taxaJuros = 0.06; //taxa de 6%
var tempoAplicacao; //meses

function jurosSimples(capInicial,taxaJuros,tempoAplicacao){
    let calculoJuros = capInicial * taxaJuros * tempoAplicacao;
    return (capInicial + calculoJuros).toFixed(2);
}

console.log(jurosSimples(1200,taxaJuros,10));

function jurosComposto(capInicial,taxaJuros,tempoAplicacao){
    
    return (capInicial*Math.pow((taxaJuros+1),tempoAplicacao)).toFixed(2);
     
}

console.log(jurosComposto(5000,taxaJuros,6));
