// Exercício 4: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


console.log('\nExercicio 004 - VERIFICAR IDADE \n');
let prompt  = require('prompt-sync')();

let anoNasc  = parseInt(prompt('Digite o seu ano de Nascimento: '));


if ((2023 - anoNasc)  <= 18 ){
    console.log(`\nVocê tem ${2023-anoNasc} anos e NÃO ESTA apto a acessar este conteúdo`);
}else{
    console.log(`\nVocê tem ${2023-anoNasc} anos e está apto a acessar este conteúdo`);
}