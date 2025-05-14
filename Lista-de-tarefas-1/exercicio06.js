const prompt = require('prompt-sync')();


let a = Number(prompt("Digite o lado A:"));
let b = Number(prompt("Digite o lado B:"));
let c = Number(prompt("Digite o lado C:"));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triângulo equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Não é um triângulo");
}
