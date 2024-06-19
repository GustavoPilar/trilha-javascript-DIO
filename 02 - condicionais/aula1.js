
/* Exemplo com resto de divisão */

const numero = 10;

const NumeroPar = (numero % 2) === 0;
/* Diferenças entre operadores de igualdade

    == é igual, ou seja, se eu colocar '0', por mais que o resultado da conta seja um número, ele está igual ao texto, então retornará True

    === é igual igual, ou seja, se estiver dentro de uma string como no exemplo acima, '0', ele vai retornar False, por ser uma string e o resultado ser um inteiro. Então ele verifica o tipo dessa igualdade.
    
*/

console.log(NumeroPar);
