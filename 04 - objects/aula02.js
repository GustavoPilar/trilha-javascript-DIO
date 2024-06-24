
const pessoa = {
    nome: 'Gustavo Henrique',
    idade: 19 
}

pessoa.altura = 1.78;

/* Deletar atribuição */
delete pessoa.nome;

console.log(pessoa.altura);
console.log(pessoa);
