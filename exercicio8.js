/* 08) Pedro joga N jogos de basquete por temporada.
Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. 
Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 
etc..”, escreva uma função que ao recebê-la irá comparar 
os valores um a um e irá retornar um vetor com o número 
de vezes que ele bateu seu recorde de maior número de 
pontos e quando fez seu pior jogo. (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)

*/

const pontuacao1 = [10, 20, 20, 8, 25, 3 ,0 ,30, 1];
const pontuacao2 = [5,3,8,13,44,5,4];

function comparaPontuacao (pontuacao){
    let bateuProprioRecord = 0;
    let jogoComMenorPontuacao;
    for (let index = 0; index < pontuacao.length; index++) {
        if (pontuacao[index+1] < pontuacao[index] && pontuacao[index+1] != undefined) {
            bateuProprioRecord = bateuProprioRecord+1;
        }
        if(pontuacao[index] < pontuacao[index+1] && pontuacao[index+1] != undefined){
            jogoComMenorPontuacao = index+1;
        }
    }
    return [bateuProprioRecord,jogoComMenorPontuacao];
}
console.log(comparaPontuacao(pontuacao1));

