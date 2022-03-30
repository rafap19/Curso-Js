/* Também podemos expressar um valor default para uma function */

function imprimeUsuario({ nome, idade, sexo, pais = 'Não informado' }) {
    console.log(nome);
    console.log(idade);
    console.log(sexo);
    console.log(pais);
    
}

var usuarioFunction = {
    nome: 'Rafael Sousa',
    idade: 21,
    sexo: 'Masculino',
    //pais: 'Brasil'
}

imprimeUsuario(usuarioFunction);