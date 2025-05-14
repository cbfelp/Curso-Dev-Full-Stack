const prompt = require('prompt-sync')();
let soma = 0;
let count = 0;
let numero;
do {
    numero = parseFloat(prompt("Digite um número (0 para sair):"));
    if (numero !== 0) {
        soma += numero;
        count++;
    }
} while (numero !== 0);
if (count > 0) {
    console.log("Média:", (soma / count).toFixed(2));
} else {
    console.log("Nenhum número foi digitado.");
}
