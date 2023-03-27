/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
const dia1 = 7;
const dia2 = 5;
function diaUtil(dia){
    switch (dia) {
        case 1:
        case 7:
            if(dia == 1){
                console.log('Fim de semana: domingo');
            }else{
                console.log('Fim de semana: sabado');
            }
            break;
        case 2:
            console.log('Dia útil: segunda-feira');
            break;
        case 3:
            console.log('Dia útil: terça-feira');
            break;
        case 4:
            console.log('Dia útil: quarta-feira');
            break;
        case 5:
            console.log('Dia útil: quinta-feira');
            break;
        case 6:
            console.log('Dia útil: sexta-feira');
            break;
        default:
            console.log('Dia inválido');
            break;
    }
}

diaUtil(dia1);
diaUtil(dia2);