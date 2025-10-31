import readline from 'readline-sync';

// Atividade pratica JavaScript 7
// Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais:
//  numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, 
// mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, 
// mostre a mensagem na tela Operação Inválida!
const calculadora = [
    {codigo: 1, operacao: 'Soma'},
    {codigo: 2, operacao: 'Subtracao'},
    {codigo: 3, operacao: 'Multiplicacao'},
    {codigo: 4, operacao: 'Divisao'}
];

let numero1 = readline.question('Digite o primeiro numero: ');
let numero2 = readline.question('Digite o segundo numero: ');
let codigoOperacao = readline.question('Digite o codigo da operacao (1-Soma, 2-Subtracao, 3-Multiplicacao, 4-Divisao): ');
let resultado;

switch (parseInt(codigoOperacao)) {
    case 1:
        resultado = parseFloat(numero1) + parseFloat(numero2);
        console.log(`O resultado da soma é: ${resultado.toFixed(1)}`);
        break;
    case 2:
        resultado = parseFloat(numero1) - parseFloat(numero2);
        console.log(`O resultado da subtracao é: ${resultado.toFixed(1)}`);
        break;
    case 3:
        resultado = parseFloat(numero1) * parseFloat(numero2);
        console.log(`O resultado da multiplicacao é: ${resultado.toFixed(1)}`);
        break;
    case 4:
        resultado = parseFloat(numero1) / parseFloat(numero2);
        if (parseFloat(numero2) === 0) {
            console.log('Erro: Divisao por zero nao e permitida.');
        } else {
            console.log(`O resultado da divisao é: ${resultado.toFixed(1)}`);
        }
        break;
    default:
        console.log('Operacao invalida.');
        break;
}