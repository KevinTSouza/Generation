import readline from 'readline-sync';

// Atividades práticas de JavaScript 5.3 JS4
// Atividade pratica JavaScript 1
let salario; 
let abono;
let novoSalario;

salario = readline.question('Digite o salario do funcionario: ');
abono = readline.question('Digite o valor do abono: ');
novoSalario = parseFloat(salario) + parseFloat(abono);
console.log(`O novo salario do funcionario é: R$ ${novoSalario.toFixed(2)}`);

// Atividade pratica JavaScript 2
let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = readline.question('Digite a primeira nota: ');
nota2 = readline.question('Digite a segunda nota: ');
nota3 = readline.question('Digite a terceira nota: ');
nota4 = readline.question('Digite a quarta nota: ');
media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
console.log(`A media das notas: ${media.toFixed(2)}`);

// Atividade pratica JavaScript 3
let SalarioBruto;
let AdicionalNoturno;
let HorasExtras;
let Desconto;
let SalarioLiquido;

SalarioBruto = readline.question('Digite o salario bruto do funcionario: ');
AdicionalNoturno = readline.question('Digite o valor do adicional noturno: ');
HorasExtras = readline.question('Digite o valor das horas extras: ');
Desconto = readline.question('Digite o valor do desconto: ');

SalarioLiquido = parseFloat(SalarioBruto) + parseFloat(AdicionalNoturno) + parseFloat(HorasExtras * 5) - parseFloat(Desconto);
console.log(`O salario liquido do funcionario: R$ ${SalarioLiquido.toFixed(2)}`);

// Atividade pratica JavaScript 4
let numero1;
let numero2;
let numero3;
let numero4;
let diferenca;

numero1 = readline.question('Digite o primeiro numero: ');
numero2 = readline.question('Digite o segundo numero: ');
numero3 = readline.question('Digite o terceiro numero: ');
numero4 = readline.question('Digite o quarto numero: ');
diferenca = (parseInt(numero1) * parseInt(numero2)) - (parseInt(numero3) * parseInt(numero4));
console.log(`A diferenca é: ${diferenca}`);
