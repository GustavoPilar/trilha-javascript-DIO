
/* 
    Declarando uma function

    function nome_function (argument) { 
        <<Comand block >> 
    }
*/

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 20));
