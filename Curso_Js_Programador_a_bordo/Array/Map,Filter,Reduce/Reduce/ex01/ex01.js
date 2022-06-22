/* a diferença dos reduce para os métodos filter e map é que com ele o valor retornado pode ser qualquer coisa(função,array,string,número etc), seus parâmetros são uma function e o valor inicial,essa function será o item a iterar ou seja o índice, e o valor inicial será oque será utilizado como valor inicial no caso o 0.


Essa função recebe dois parâmetros, 1 - o item de acumulação,como comparação esse seria a variável soma abaixo
*/

const numeros = [2, 3, 6, 5, 10]
/*let soma = 0

    for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]   
    }
    console.log(soma)*/

    const somaReduce = numeros.reduce((valorAcumulador,valorArray) =>
        valorAcumulador + valorArray
, 0)

    console.log(somaReduce)

    
   