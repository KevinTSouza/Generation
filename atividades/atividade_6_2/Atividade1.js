import readline from 'readline-sync';

// Atividade pratica JavaScript 1
// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

let A = readline.question('Digite o primeiro numero: ');
let B = readline.question('Digite o segundo numero: ');
let C = readline.question('Digite o terceiro numero: ');

if (parseInt(A) + parseInt(B) < parseInt(C)) {
    console.log('A soma de A + B é menor que C.');
}

if (parseInt(A) + parseInt(B) === parseInt(C)) {
    console.log('A soma de A + B é igual que C.');
}

if (parseInt(A) + parseInt(B) > parseInt(C)) {
    console.log('A soma de A + B é maior que C.');
}
