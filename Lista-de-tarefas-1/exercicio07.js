const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Digite a quantidade de maçãs:"));

let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco;
console.log("Valor total: R$ " + total.toFixed(2));
