const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

function fatorial(numero){
    let fatorial = 1

    for (let i = 1; i <=numero; i++){
        fatorial = fatorial*i
    }
    console.log(fatorial)
}
fatorial(numero)