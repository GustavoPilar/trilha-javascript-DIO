/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, cor e um gasto médio de combustível por Km rodado.
    Crie um metodo que dado a quantidade de quilimetrôs e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca, cor, gastoMedioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    gastoFinal(km, custoCombustivel) {
        const litrosConsumidos = km / this.gastoMedioCombustivel;
        const valor_Final = litrosConsumidos * custoCombustivel;
        console.log('O gasto é de R$', valor_Final.toFixed(2));
    }
}

(function () {
    const km = 100;
    const custoCombustivel = 3.42;
    const carro = new Carro('Audi', 'Branco', 10);
    carro.gastoFinal(km, custoCombustivel);
})();