/*é bem parecido com map,a diferença é que o valor da função precisa ser booleano,ele serve justamente para filtra os valores de um array,veja o exemplo abaixo utilizando primeiro map depois o filter */

const numeros = [2, 3, 6, 5, 10];
let novoArrayNumeros = []

for(let i= 0; i < numeros.length; i++) {
    novoArrayNumeros.push(numeros[i] * 2)
}


let mult2 = [];

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        mult2.push(numeros[i]);
    }
}

    console.log(mult2);

/*Agora utilizando o filter ficaria da seguinte forma */


 const numerosFiltrados = numeros.filter(numero => numero % 2 === 0);
 
    console.log('numerosFiltrados:',numerosFiltrados);

