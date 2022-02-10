/* map, filter e reduce são métodos que manipulam arrays,a diferença é que os métodos map e filter retornam um outro array enquanto o reduce pode retornar qualquer coisa */


const numeros = [2, 3, 6, 5, 10];
let novoArrayNumeros = []

for (let i = 0; i < numeros.length; i++) {
 novoArrayNumeros.push(numeros[i] * 2)
}

    console.log(novoArrayNumeros);

    /* exemplo usando for,pegamos os valores de um array e multiplicamos o mesmo valor de cada por dois e retornamos o valor alterado */

    /* Map é uma function que espera que você retorne uma função de callback para ela, o mesmo exemplo com map seria */

    const novoArrayMap = numeros.map(function(numero) {
        return numero * 2;
    })
        console.log('novoArrayMap', novoArrayMap);
        


