import readline from 'readline-sync';

// Atividade pratica JavaScript 4
// Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, 
// segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.
let caracteristica1 = readline.question('priemira caracteristica: ');
let caracteristica2 = readline.question('segunda caracteristica: ');
let caracteristica3 = readline.question('terceira caracteristica: ');

if (caracteristica1 === 'vertebrado' && caracteristica2 === 'ave' && caracteristica3 === 'carnivoro') {
  console.log('aguia');
} else if (caracteristica1 === 'vertebrado' && caracteristica2 === 'ave' && caracteristica3 === 'onivoro') {
  console.log('pomba');
} else if (caracteristica1 === 'vertebrado' && caracteristica2 === 'mamifero' && caracteristica3 === 'onivoro') {
  console.log('homem');
} else if (caracteristica1 === 'vertebrado' && caracteristica2 === 'mamifero' && caracteristica3 === 'herbivoro') {
  console.log('vaca');
} else if (caracteristica1 === 'invertebrado' && caracteristica2 === 'inseto' && caracteristica3 === 'hematofago') {
  console.log('pulga');
} else if (caracteristica1 === 'invertebrado' && caracteristica2 === 'inseto' && caracteristica3 === 'herbivoro') {
  console.log('lagarta');
} else if (caracteristica1 === 'invertebrado' && caracteristica2 === 'anelideo' && caracteristica3 === 'hematofago') {
  console.log('sanguessuga');
} else if (caracteristica1 === 'invertebrado' && caracteristica2 === 'anelideo' && caracteristica3 === 'onivoro') {
  console.log('minhoca');
} else {
  console.log('Nenhum animal encontrado com essas características.');
}