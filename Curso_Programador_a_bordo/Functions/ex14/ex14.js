/* Arrow functions são funções em que não utilizamos o nome "Function",mas utilizamos um => para representá-la */

var soma = (a, b) => {
    return a + b;
}
    console.log(soma(10, 20));

//podemos simplificar o código escrevendo da forma abaixo

var soma = (a, b) => a + b
    console.log(soma(10, 20));

    //utilizando o => o js já sabe que tem que retornar

    var retornaUsuario = () => (
    {
        nome: 'Rafael',
        sobrenome: 'Sousa'
        }
    )

    console.log(retornaUsuario());

    /* É importante proteger o bloco da arrow function com parênteses caso a gente queira utilizar objetos,pois o js pensa que se refere ao bloco da function e não a um objeto
    
        var retornaUsuario = cidade => (
            {
                nome: 'Rafael',
                idade: '21',
                cidade'
            }
        )
            console.log(retornaUsuario('Rio de Janeiro'));

    */

    /* Por questão de sintaxe,caso a função tenha apenas 1 parâmetro o js permite que não se coloque parênteses */
    

