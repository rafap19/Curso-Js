/* Podemos ainda criar funções para usar como parâmetros em objetos*/

var usuario2 = {
    digaoi: function(name) {
        return `Olá ${name}`;
    }
}
    console.log(usuario2.digaoi('Rafael'));

    /*Podemos passar variáveis como valor de um objeto*/

        var cor = 'azul';

        var usuario3 = {
            nome: 'Rafael',
            cor: cor 
        }
            console.log(usuario3);
            
            /*criamos a propriedade cor e colocamos o nome da variável criada fora do objeto,dessa forma passamos o valor da variável para dentro da propriedade do objeto */

            