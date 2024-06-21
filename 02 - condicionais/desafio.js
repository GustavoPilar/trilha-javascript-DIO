/* 
    Faça um programa para calcular o valor de uma viagem.

    Você tera 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustivel que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

*/

const etanol = 3.42;
const gasolina = 5.77;

let tipoCombustivel = 'etanol';
let kmPerLitro = 9;
let distanciaKM = 129.6;

let litrosConsumidos = distanciaKM / kmPerLitro;

let valorGasto;

if (tipoCombustivel == 'gasolina') {
    valorGasto = litrosConsumidos * gasolina;
} else if (tipoCombustivel == 'etanol') {
    valorGasto = litrosConsumidos * etanol;
} else {
    console.log('Tipo de combustível inválido.')
}

console.log('O valor gasto foi de R$' + valorGasto.toFixed(2));
