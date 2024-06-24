/* 
    Exercício guiado.
    Faça uma função que diga o seu nome;
*/

function sayMyName(name) {
    console.log('Your name is ' + name);
}

(function () {
    const name = 'Gustavo';
    sayMyName(name);
})();
