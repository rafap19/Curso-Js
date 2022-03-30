/* Podemos utilizar o 'Object.assign' para juntar dois ou mais objetos,para criar um novo objeto a partir de outros basta inserir {} e inserir os objetos que queremos juntar logo em seguida

o object asign aceita 2 parâmetros, o primeiro é oque queremos ter como alvo e o segundo ou mais são os objetos que queremos juntar*/

var usuario4 = {
    nome: 'Rafael',
    idade: 21
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

var novoUsuario = Object.assign({}, usuario4, extraInfo );
    console.log(novoUsuario);

    //obs: Podemos simplificar fazendo um spread ou "..."

    var novousuario2 = {
        ...usuario4,
        ...extraInfo
    }

    