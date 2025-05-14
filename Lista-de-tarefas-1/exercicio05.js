const prompt = require('prompt-sync')();


let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 24.9) {
    console.log("Peso normal");
} else if (imc < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
