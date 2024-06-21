/* 
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    Classificação:
        - Média menor que 5, reprovação;
        - Média entre 5 e 7, Recuperação;
        - Média acima de 7, Aprovado;
*/

let nota_1 = 5.0;
let nota_2 = 3.0;
let nota_3 = 4.0;

let media_Semestre = (nota_1 + nota_2 + nota_3) / 3;

if (media_Semestre < 5.0) {
    console.log('Média do semestre = ', media_Semestre.toFixed(1),  '. Reprovação.')
} else if (media_Semestre <= 7.0) {
    console.log('Média do semestre = ', media_Semestre.toFixed(1),  '. Recuperação.')
} else {
    console.log('Média do semestre = ', media_Semestre.toFixed(1),  '. Aprovado.')
}
