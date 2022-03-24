/* treino de operador ternário ?:*/


let pontos = 100;
let tipoCliente = pontos >= 100 ? 'Cliente Premium' : 'Cliente Comum';
console.log(tipoCliente);


let idade = 18;
let identidade = idade >= 18 ? 'Voto Obrigatório' : 'Inapto para Votar';
console.log(identidade);


let tempo = 'frio'
let lazer = tempo === 'quente' ? 'vou para a praia' : 'vou ficar em casa';
console.log(lazer);

/*Sistema Escolar de Notas*/ 


let nota1_1bim = 3.7;
let nota2_1bim = 5.8;
let media1bim = (nota1_1bim +nota2_1bim)/2;

let nota1_2bim = 6.8;
let nota2_2bim = 7.7;
let media2bim = (nota1_2bim +nota2_2bim)/2;

let nota1_3bim = 9.0;
let nota2_3bim = 8.8;
let media3bim = (nota1_3bim +nota2_3bim)/2;

let nota1_4bim = 5.8;
let nota2_4bim = 8.0;
let media4bim = (nota1_4bim +nota2_4bim)/2;
let mediaFinal = (media1bim + media2bim + media3bim + media4bim)/4;
let ResultadoFinal = mediaFinal >= 7 ? 'Aprovado' : 'Reprovado';
console.log(ResultadoFinal);






