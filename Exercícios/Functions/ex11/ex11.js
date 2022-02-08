/* Também podemos utilizar o método call para alterar o valor de this, o primeiro parâmetro é o nome do nosso 'this', no caso é um objeto.A partir do 2 parâmetro serão colocados os parâmetros que aquela função vai receber */

function personagem(p1, p2, p3) {
    console.log(p1, p2, p3)
    console.log('Personagem This =',this)
}

var personagemThis = {
    nome: 'Sousa'
}
personagem.call(personagemThis,'parametro1', 345, [2,4]);

