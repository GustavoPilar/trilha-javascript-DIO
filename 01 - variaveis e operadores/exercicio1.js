/* 
    Faça um programa para calcular o valor de uma viagem

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível.
    2 - Gasto médio de combustível do carro por KM.
    3 - Distância em KM da viagem

    Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustivel = 3.42;
const kmPerLitro = 11;
let distanciaKm = 30.3;

let litrosConsumidos = distanciaKm / kmPerLitro; 
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
