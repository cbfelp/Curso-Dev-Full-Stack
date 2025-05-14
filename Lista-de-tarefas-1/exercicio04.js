const prompt = require('prompt-sync')();
let opcao = parseInt(prompt("Escolha uma opção:\n1 - Saudação\n2 - Ajuda\n3 - Sair"));
switch (opcao) {
    case 1:
        console.log("Olá, usuário!");
        break;
    case 2:
        console.log("Como posso ajudar?");
        break;
    case 3:
        console.log("Encerrando programa...");
        break;
    default:
        console.log("Opção inválida.");
}
