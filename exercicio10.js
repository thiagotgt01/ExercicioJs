/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/
const numero1 = 9
const numero2 = 20
function analisaNumero(numero){
    if(numero%3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(analisaNumero(numero1));
console.log(analisaNumero(numero2));