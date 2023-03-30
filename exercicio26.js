/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function contadorNumeroPares() {
    for (let index = 0; index < 100; index++) {
        if((index+1)%2 == 0){
            console.log(index+1);
        }
        
    }
}
contadorNumeroPares();