/* o método bind possui os mesmos parâmetros do apply e call, a diferença é que ele não invoca a função imediatamente,mas sim retorna uma fuction,dessa forma você pode armazená-la em uma variável e utiliza-la depois*/

function personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log('Personagem This =',this)
}

var personagemThis = {
    nome: 'Sousa'
}
/*personagem.call([personagemThis,'parametro1', 345, [2,4]]); */

var pers = personagem.bind(personagemThis, 'Olá', 'Mundo', '!!!')
pers()
