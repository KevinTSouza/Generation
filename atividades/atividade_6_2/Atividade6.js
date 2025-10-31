import readline from 'readline-sync';

// Atividade pratica JavaScript 6
// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador 
// (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário 
// reajustado.
const colaboradores = [
    { codigo: 1, cargo: 'Gerente', reajuste: 10 },
    { codigo: 2, cargo: 'Vendedor', reajuste: 7 },
    { codigo: 3, cargo: 'Supervisor', reajuste: 9 },
    { codigo: 4, cargo: 'Motorista', reajuste: 6 },
    { codigo: 5, cargo: 'Estoquista', reajuste: 5 },
    { codigo: 6, cargo: 'Tecnico de TI', reajuste: 8 }
];

let nomeDoColaborador = readline.question('Digite o nome do colaborador: ');
let codigoDoCargo = readline.question('Digite o codigo do cargo do colaborador: ');
let salarioAtual = readline.question('Digite o salario atual do colaborador: ');
let reajuste = 0;

switch (codigoDoCargo.toLowerCase()) {
    case '1':
        reajuste = colaboradores[0].reajuste;
        console.log(`Nome do Colaborador: ${nomeDoColaborador} \nCargo: ${colaboradores[0].cargo} \nSalario: R$ ${(parseFloat(salarioAtual) * (1 + reajuste / 100)).toFixed(2)}`);
        break;
    case '2':
        reajuste = colaboradores[1].reajuste;
        console.log(`Nome do Colaborador: ${nomeDoColaborador} \nCargo: ${colaboradores[1].cargo} \nSalario: R$ ${(parseFloat(salarioAtual) * (1 + reajuste / 100)).toFixed(2)}`);
        break;
    case '3':
        reajuste = colaboradores[2].reajuste;
        console.log(`Nome do Colaborador: ${nomeDoColaborador} \nCargo: ${colaboradores[2].cargo} \nSalario: R$ ${(parseFloat(salarioAtual) * (1 + reajuste / 100)).toFixed(2)}`);
        break;
    case '4':
        reajuste = colaboradores[3].reajuste;
        console.log(`Nome do Colaborador: ${nomeDoColaborador} \nCargo: ${colaboradores[3].cargo} \nSalario: R$ ${(parseFloat(salarioAtual) * (1 + reajuste / 100)).toFixed(2)}`);
        break;
    case '5':
        reajuste = colaboradores[4].reajuste;
        console.log(`Nome do Colaborador: ${nomeDoColaborador} \nCargo: ${colaboradores[4].cargo} \nSalario: R$ ${(parseFloat(salarioAtual) * (1 + reajuste / 100)).toFixed(2)}`);
        break;
    case '6':
        reajuste = colaboradores[5].reajuste;
        console.log(`Nome do Colaborador: ${nomeDoColaborador} \nCargo: ${colaboradores[5].cargo} \nSalario: R$ ${(parseFloat(salarioAtual) * (1 + reajuste / 100)).toFixed(2)}`);
        break;
    default:
        console.log('Cargo invalido.');
        break;
}