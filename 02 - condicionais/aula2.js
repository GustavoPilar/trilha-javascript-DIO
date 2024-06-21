

const numero = 9;
const numeroDivisielPor5 = (numero % 5 ) === 0;

if (numero === 0) {
    console.log("O número é inválido");
} else if (numeroDivisielPor5) {
    /* True */
    console.log("Sim");
} else {
    /* False */
    console.log("Não");
}
