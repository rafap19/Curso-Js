/* Podemos ainda utilizar o "apply" para alterar o valor de um "this", a única diferença entre o aply e o call é que os parâmetros no apply precisam estar em um array  */

function personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log('Personagem This =',this)
}

var personagemThis = {
    nome: 'Sousa'
}
personagem.call([personagemThis,'parametro1', 345, [2,4]]);