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


        /*  Podemos ainda usar arrow functions para deixar nosso código ainda menor */
        

        const arrayMapArrow = numeros.map(numero => numero * 2);
            console.log('arrayMapArrow', arrayMapArrow); 

            

        const nomes = ['Ayrton', 'Teshima', 'Teste', 'Fulano de tal'];

        const nomesMinusculos = nomes.map(nome => nome.toLocaleLowerCase())
            console.log(nomesMinusculos);


