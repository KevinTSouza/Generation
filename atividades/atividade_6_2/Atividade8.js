import readline from 'readline-sync';

// Atividade pratica JavaScript 8

const bancos = [
    { codigo: 1, operacao: 'saldo'},
    { codigo: 2, operacao: 'saque'},
    { codigo: 3, operacao: 'deposito'},
];

let saldo = 1000.00;
let codigoOperacao = readline.question('Digite o codigo da operacao (1-Saldo, 2-Saque, 3-Deposito): ');

switch (parseInt(codigoOperacao)) {
    case 1:
        console.log(`O saldo atual é: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        let saque = readline.question('Digite o valor do saque: ');

        if (parseFloat(saque) > saldo) {
            console.log('Saldo insuficiente para o saque.');
        } else {
            saldo -= parseFloat(saque);
            console.log(`Saque realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`);
        }
        break;
    case 3:
        let deposito = readline.question('Digite o valor do deposito: ');
        saldo += parseFloat(deposito);
        console.log(`Deposito realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`);
        break;
    default:
        console.log('Operacao invalida.');
        break;
}