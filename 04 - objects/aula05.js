
/* Entendendo classes em JS */

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const gustavo = new Pessoa();
gustavo.nome = 'Gustavo Henrique';
gustavo.idade = 19;

gustavo.descrever();

