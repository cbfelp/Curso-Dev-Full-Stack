const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (num1 < num2) {
    console.log(num1 + ", " + num2);
} else {
    console.log(num2 + ", " + num1);
}
