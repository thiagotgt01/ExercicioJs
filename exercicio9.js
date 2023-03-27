/* 
09) Construa uma função para um sistema de notas de uma 
instituição que possui a seguinte política de 
classificação: Todo aluno recebe uma nota de 0 a 100. 
Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença 
entre a nota e o próximo múltiplo de 5 for menor que 3, 
arredondar a nota para esse próximo múltiplo de 5. Se a nota 
for abaixo de 38, não é feito nenhum arredondamento pois esta 
nota resulta na reprovação do aluno. Por exemplo, a nota 84 
será arredondada para 85, mas a nota 29 não será arredondada 
por ser abaixo de 40 e não ser possível arredondamento eficiente, 
ou seja, que evite a reprovação do aluno. No caso de a nota 
ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

//arredondar nota para cima, multiplo de 5

//notas abaixo de 38 ponto nas entram na regra de arredondamento, pois 
//onde ocorre a reprovacao do aluno.
//notas de pontuacao 38 ate 100 entram na regra de arredondamento.

const nota1 = 81;
const nota2 = 39;

function analiseDeNota(nota) {
    if(nota >= 38){
        let notaAjustada = nota + (5 - (nota%5));
        return 'Aluno aprovado, pontuação: '+notaAjustada;
    }else{
        return 'Aluno reprovado, pontuação: '+nota;
    }

}

console.log(analiseDeNota(nota1));
console.log(analiseDeNota(nota2));