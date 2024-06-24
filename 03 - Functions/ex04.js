/* 
    Exercício guiado
    Funções para calcular preço

    Elabore um algoritmo que calcule o que deve ser pado por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.

    Código Condição de pagamento:
        - À vista Débito, recebe 10% de desconto;
        - À vista no Dinheiro ou PIX, recebe 15% de desconto;
        - Em duas vezes, preço normal de etiqueta sem juros;
        - Acima de duas vezes, preço de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor_Produto, desconto) {
    return (valor_Produto - (valor_Produto / 10) * desconto);
}

function aplicarJuros(valor_Produto, desconto) {
    return (valor_Produto + (valor_Produto / 10) * desconto);
}

function mostrarResultado(valor_Final) {
    console.log('O valor ficou R$' + valor_Final.toFixed(2));
}

function calcularPreco(valor_Produto, forma_De_Pagamento) {

    let valor_Final;

    switch (forma_De_Pagamento) {
        case 1:
            valor_Final = aplicarDesconto(valor_Produto, 1.5);
            mostrarResultado(valor_Final);
            break;
        case 2:
            valor_Final = aplicarDesconto(valor_Produto, 1.0);
            mostrarResultado(valor_Final);
            break;
        case 3:
            valor_Final = aplicarDesconto(valor_Produto, 0);
            mostrarResultado(valor_Final);
            break;
        default:
            valor_Final = aplicarJuros(valor_Produto, 1.0);
            mostrarResultado(valor_Final);
            break;
    }
}



(function () {
    const valor_Produto = 100.50;
    const forma_De_Pagamento = 4;
    /* 
        [1] Dinheiro ou PIX;
        [2] Débito;
        [3] 2x no Crédito;
        [>= 4] 3x ou mais no Crédito
    */
    calcularPreco(valor_Produto, forma_De_Pagamento);
})();