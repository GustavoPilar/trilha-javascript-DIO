/* 
    Exercício guiado.
    Faça uma função que diga se a idade é menor ou maior de idade;
*/

function sayMyName(name) {
    console.log('Your name is ' + name);
}

function ofLegalAge(age) {
    if (age < 18) {
        console.log('You are not of legal age.');
    } else {
        console.log('You are of legal age.');
    }
}

(function () {
    const name = 'Gustavo';
    const age = 19;
    sayMyName(name);
    ofLegalAge(age);
})();
