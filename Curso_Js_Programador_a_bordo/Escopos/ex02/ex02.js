/*Escopo Local : São variáveis ou funções que estão acessíveis apenas dentro de seus escopos*/

function imprimeIdade() {
    var idade = 27;
    console.log(idade)
}
imprimeIdade()

//console.log(idade) -- APARECE MENSAGEM DE ERRO

/*Neste caso a var idade não existe fora do escopo da function  imprimeIdade,podemos dizer que o escopo é como se fosse a região,por a variavel idade ser local ela só funciona na região da função*/

/* É muito importante declarar o escopo da variável,caso contrário ela é considerada global */

