const nome = 'lello';
const sobrenome = 'Arruda';
const idade = 31;
const peso = 89;
const alturaEmCm = 1.73;
let indiceMassaCorporal;
let  anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 1991 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log('tem', alturaEmCm,'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento,'.');