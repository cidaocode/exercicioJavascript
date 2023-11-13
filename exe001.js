// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

console.log('\nExercicio 001 - LOGIN E SENHA\n');
let prompt  = require('prompt-sync')();

let login  = prompt('Digite o nome de usuário: ');
let senha  = prompt('Digite a senha: ');

if (login  == "admin" && senha == "senha123"){
    console.log('\nUsuário Logado com Sucesso!!!');
}else{
    console.log('\nUsuário e/ou Senha não existe na base de dados!');
}

