/* 
    2) O IMC - Indice de Massa Corporal é um critério da organização mundial da saúda para dar um indicação da condição de peso de uma pessoa adulta.

    Formula do IMC:
        - IMC = peso / (altura * altura)

    Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos. Condição:
        - Abaixo de 18.5. Abaixo do peso;
        - Entre 18.5 e 25. Peso normal;
        - Entre 25 e 30. Acima do peso;
        - Entre 30 e 40. Obeso;
        - Acima de 40. Obesidade Grave;
*/

let altura = 1.78;
let peso = 75.2;

const IMC = peso / (altura * altura);

if (IMC < 18.5) {
    console.log('IMC = ', IMC.toFixed(1), '. Abaixo do peso.');
} else if (IMC <= 25) {
    console.log('IMC = ', IMC.toFixed(1), '. Peso normal.');
} else if (IMC <= 30) {
    console.log('IMC = ', IMC.toFixed(1), '. Acima do peso.');
} else if (IMC <= 40) {
    console.log('IMC = ', IMC.toFixed(1), '. Obeso');
} else {
    console.log('IMC = ', IMC.toFixed(1), '. Obesidade Grave.');
}
