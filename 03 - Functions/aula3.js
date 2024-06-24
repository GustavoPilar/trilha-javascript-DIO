
function calcularIMC(peso, altura) {
    const imc = peso / Math.pow(altura, 2);
    return imc
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if (imc <= 25) {
        return 'Peso normal.';
    } else if (imc <= 30) {
        return 'Acima do peso.';
    } else if (imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave.';
    }
}

// Main
(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
})();
