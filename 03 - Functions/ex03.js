/* 
    Exercício guiado.
    Invocando função dentro de outra função
*/

function sayMyName(name) {
    return 'Your name is ' + name;
}

function ofLegalAge(age) {
    if (age < 18) {
        console.log(sayMyName('Gustavo') + '.\nYou are not of legal age.');
    } else {
        console.log(sayMyName('Gustavo') + '.\nYou are of legal age.');
    }
}

(function () {
    const age = 19;
    ofLegalAge(age);
})();
