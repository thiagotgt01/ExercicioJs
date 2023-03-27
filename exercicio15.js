/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/
const compra1 = 'Hatch';
const compra2 = 'Sedan';

function revenda(opcaoDeCompra){
    switch (opcaoDeCompra) {
        case 'Hatch':
            console.log('Compra efetuada com sucesso');
            break;
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            console.log('Tem certeza que não prefere este modelo?');
            break;
    
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
            break;
    }
}

revenda(compra1);
revenda(compra2);
