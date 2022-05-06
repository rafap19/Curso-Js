/* Podemos usar o destructuring dentro de uma função para extrair propriedades,com o destructuring não vamos ter que exibir o objeto inteiro,apenas as propriedades necessárias */

function imprimeUsuario({ nome, idade, sexo }) {
    console.log(nome);
    console.log(idade);
    console.log(sexo);
    
}

var usuarioFunction = {
    nome: 'Rafael Sousa',
    idade: 21,
    sexo: 'Masculino'
}

imprimeUsuario(usuarioFunction);