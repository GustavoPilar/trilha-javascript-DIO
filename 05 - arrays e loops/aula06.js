const notas = [];

notas.push(7.5);
notas.push(8.2);
notas.push(8.6);
notas.push(9.2);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log(media.toFixed(2));