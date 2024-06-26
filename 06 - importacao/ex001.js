/* 

    Uma sala contém cinco alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Sáida:
    98
*/

const {gets, print} = require('./funcoes-auxiliares');

let maiorValorEncontrado = 0;

for(let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numerosSorteado;
    }
}

print(maiorValorEncontrado);

