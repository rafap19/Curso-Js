/* Reduce: o reduce tem uma vantagem sobre o map e filter,ele pode nos retornar além de arrays,objetos,números,strings e etc,seus parâmetros são uma função e o valor inicial */

const numeros = [2, 3, 6, 5, 10];
let novoArrayNumeros = []

let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
      soma = soma + numeros[i];
    }

    console.log('for norma', soma);

    // const numeros = [2, 3, 6, 5, 10];
    
    const somaReduce = numeros.reduce((valorAcumulador, valorArray) =>  valorAcumulador + valorArray, 0)

    console.log('somaReduce', somaReduce);


