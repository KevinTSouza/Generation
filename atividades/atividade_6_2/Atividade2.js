import readline from 'readline-sync';

// Atividade pratica 2 JavaScript
// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo
let numeroInteiro = readline.question('Digite um numero: ');
let tipo;
let sinal;

if (parseInt(numeroInteiro) % 2 === 0) {
    tipo = 'par';
} else {
    tipo = 'impar';
}

if (parseInt(numeroInteiro) >= 0) {
    sinal = 'positivo';
} else {
    sinal = 'negativo';
}

console.log(`O numero ${numeroInteiro} é ${tipo} e ${sinal}.`);