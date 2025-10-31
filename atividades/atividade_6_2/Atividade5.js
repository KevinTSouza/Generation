import readline from 'readline-sync';

// Atividade pratica JavaScript 5 Switch case
// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada 
// deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.
const produto = [
    { codigo: 1, nome: 'Cachorro Quente', preco: 10.00 },
    { codigo: 2, nome: 'X-Salada', preco: 15.00 },
    { codigo: 3, nome: 'X-Bacon', preco: 18.00 },
    { codigo: 4, nome: 'Bauru', preco: 12.00 },
    { codigo: 5, nome: 'Refrigerante', preco: 8.00 },
    { codigo: 6, nome: 'Suco de laranja', preco: 13.00 }
];
//let nomeProduto = produto[0].nome;
let valorTotal = 0;
let codigoProduto = readline.question('Digite o codigo do produto: ');
let quantidade = readline.question('Digite a quantidade do produto: ');

switch (parseInt(codigoProduto)) {
    case 1:
        valorTotal = produto[0].preco * parseInt(quantidade);
        console.log(`Produto: ${produto[0].nome} \nValor total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 2:
        valorTotal = produto[1].preco * parseInt(quantidade);
        console.log(`Produto: ${produto[1].nome} \nValor total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 3:
        valorTotal = produto[2].preco * parseInt(quantidade);
        console.log(`Produto: ${produto[2].nome} \nValor total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 4:
        valorTotal = produto[3].preco * parseInt(quantidade);
        console.log(`Produto: ${produto[3].nome} \nValor total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 5:
        valorTotal = produto[4].preco * parseInt(quantidade);
        console.log(`Produto: ${produto[4].nome} \nValor total: R$ ${valorTotal.toFixed(2)}`);
        break;
    case 6:
        valorTotal = produto[5].preco * parseInt(quantidade);
        console.log(`Produto: ${produto[5].nome} \nValor total: R$ ${valorTotal.toFixed(2)}`);
        break;
    default:
        console.log('Codigo de produto invalido.');
        break;
}