//Numeros sorteados
const conjuntoDeEntradas = [5, 50, 10, 98, 23];

//Contador de chamadas
let i = 0;

function gets() {
    const valor = conjuntoDeEntradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
