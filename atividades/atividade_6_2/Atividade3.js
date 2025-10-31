import readline from 'readline-sync';

// Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, 
// só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), 
// a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
// Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.

let nome = readline.question('Digite o nome do doador: ');
let idade = readline.question('Digite a idade do doador: ');
let primeiraDoacao = readline.question('Primeira doacao de sangue? (sim/nao): ');

if (parseInt(idade) >= 18 && parseInt(idade) <=60) {
    console.log(`${nome} está apto para doar sangue!`);
} 

if (parseInt(idade) < 18 || parseInt(idade) > 69) {
    console.log(`${nome} não está apto para doar sangue!`);
}

if (parseInt(idade) > 60 && parseInt(idade) <= 69 && primeiraDoacao.toLowerCase() === 'sim') {
    console.log(`${nome} não está apto para doar sangue!`);
}

if (parseInt(idade) > 60 && parseInt(idade) <= 69 && primeiraDoacao.toLowerCase() === 'nao') {
    console.log(`${nome} está apto para doar sangue!`);
}
