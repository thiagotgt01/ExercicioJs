/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function analiseAluno(codigoAluno) { 
    let alunos = [{
        id : 14,
        nome: 'João',
        nota1: 4,
        nota2: 8,
        nota3: 8.5
    },{
        id : 221,
        nome: 'Marcelo',
        nota1: 7,
        nota2: 10,
        nota3: 8.5
    },{
        id : 443,
        nome: 'Carlos',
        nota1: 7,
        nota2: 3,
        nota3: 2
    }];
    
    let mensagem;
    let alunoAnalisado;
    alunos.forEach(aluno => {
        if(codigoAluno == aluno.id){
            alunoAnalisado = aluno;
        }
    });

    if(alunoAnalisado != undefined){
        let notas = [alunoAnalisado.nota1, alunoAnalisado.nota2, alunoAnalisado.nota3];
        let maiorNota = Math.max(...notas);
        let notasRestantes = [];

        for(let i=0;i<notas.length;i++){
            if(maiorNota != notas[i]){
                notasRestantes.push(notas[i]);
            }
        }

        let mediaPonderada = ((maiorNota*4) + (notasRestantes[0]*3) + (notasRestantes[1]*3)) / (4+3+3);
        if(mediaPonderada >= 5){
            mensagem = `O aluno ${alunoAnalisado.nome} de código ${alunoAnalisado.id} obteve as notas ${alunoAnalisado.nota1}, ${alunoAnalisado.nota2}, ${alunoAnalisado.nota3}. Sendo Aprovado por media ${mediaPonderada}.`;
            
        }else if(mediaPonderada < 5){
            mensagem =`O aluno ${alunoAnalisado.nome} de código ${alunoAnalisado.id} obteve as notas ${alunoAnalisado.nota1}, ${alunoAnalisado.nota2}, ${alunoAnalisado.nota3}. Sendo Reprovado por media ${mediaPonderada}.`;
        }
    }else if(alunoAnalisado == undefined){
        mensagem = `O código do aluno inserido esta incorreto.`;
    }

    return mensagem;
    
}

console.log(analiseAluno(14));
console.log(analiseAluno(221));
console.log(analiseAluno(443));
console.log(analiseAluno(23));
