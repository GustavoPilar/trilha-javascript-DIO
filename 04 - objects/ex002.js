/* 
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessaos devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoas {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    dizerIMC() {
        console.log('Meu IMC é de ', calcularIMC(this.peso, this.altura));
    }
}

function calcularIMC(peso, altura) {
    const IMC = peso / Math.pow(altura, 2);
    return IMC.toFixed(2);
}

const jose = new Pessoas('José', 1.75, 70);

jose.dizerIMC();
