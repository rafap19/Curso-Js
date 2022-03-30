/*Podemos valores de objetos que estão contidos dentro
de outros objetos*/

var novoUsuario2 = {
    nome: {
        primeiro: 'Rafael',
        ultimo: 'Sousa'
    }
}
        /* Maneira não intuiva seria:

         var primeiro = novoUsuario2.nome.primeiro;
            console.log(primeiro); */

        /*Usando destructuring
            o destructuring segue a ordem,ou seja primeiro declaramos o primeiro objeto dentro de chaves, depois declaramos o valor que está dentro desse object
            */

        var {nome: { primeiro}} = novoUsuario2;
            console.log(primeiro);

