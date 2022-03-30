/* Se caso quisermos apenas alterar uma delas,acrescentando um outro objeto basta deixar os objetos no parênteses e o primeiro será o modificado*/

var usuario4 = {
    nome: 'Rafael',
    idade: 21
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

var Usuariomodificado = Object.assign( usuario4, extraInfo );
    console.log(Usuariomodificado);