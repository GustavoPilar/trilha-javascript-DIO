/* 
    3) Elabore um algoritmo que calcule o que deve ser pado por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.

    Código Condição de pagamento:
        - À vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou PIX, recebe 15% de desconto;
        - Em duas vezes, preço normal de etiqueta sem juros;
        - Acima de duas vezes, preço de etiqueta mais juros de 10%;
*/

const valor_Produto = 100.00;

const forma_De_Pagamento = 1;
/* 
    [1] Dinheiro ou PIX;
    [2] Débito;
    [3] 2x no Crédito;
    [4] 3x ou mais no Crédito
*/

let desconto, juros, valor_Final;

switch (forma_De_Pagamento) {
    case 1:
        desconto = (valor_Produto / 10) * (1.5);
        valor_Final = valor_Produto - desconto;
        break;
    case 2:
        desconto = (valor_Produto / 10) * (1.0);
        valor_Final = valor_Produto - desconto;
        break;
    case 3:
        desconto = 0;
        valor_Final = valor_Produto - desconto;
        break;
    case 4:
        juros = (valor_Produto / 10) * (1.0);
        valor_Final = valor_Produto + juros;
        break;
}

console.log("O valor ficou: R$", valor_Final.toFixed(2));