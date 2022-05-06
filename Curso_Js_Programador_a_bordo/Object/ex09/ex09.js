/* Podemos declarar um valor default para tal atributo,caso o mesmo não exista */

var novoUsuario2 = {
    nome: {
        primeiro: 'Rafael',
        //sobrenome: 'Sousa'
    }
}

var {nome: {sobrenome = 'Não informado'}} = novoUsuario2;
    console.log(sobrenome);

    /*obs: caso o valor 'Sobrenome' seja encontrado ele será levado em consideração */