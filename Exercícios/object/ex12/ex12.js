/* Podemos interar um objeto com loop for comum ou for of,para isso extraímos as propriedades,armazenar em um array e fazer a interação tendo como base esse array que retornar*/

var usuarioFunction = {
    nome: 'Rafael Sousa',
    idade: 21,
    sexo: 'Masculino'
    //pais: 'Brasil'
}
var props = Object.keys(usuarioFunction);
console.log(props);

for (var i = 0; i < props.length; i ++) {
    console.log('usuarioFunction:', usuarioFunction[props[i]])
}


for (var prop of props) {
    console.log('usuarioFunction 2:', usuarioFunction[prop])
}

/*Podemos ainda utilizar o loop for in para interar objetos,a diferença é ele imprime somente as chaves */

for( var prop2 in usuarioFunction) {
    console.log(prop2);
}

/*Para chamar os valores dessa propriedades precisamos primeiro por o nome do objeto e por o nome da variável entre colchetes,dessa forma é imprimido os valores das propriedades,caso e queira imprimir ambos basta ir na ordem,primeiro a propriedade depois o valor */

for( var prop2 in usuarioFunction) {
    console.log(prop2,usuarioFunction[prop2]);
}

/* As vezes os objetos podem por herança herdar propriedades de outros lugares, para garantir que o mesmo faz parte do nosso objeto podemos usar a .hasOwnProperty */

for( var prop2 in usuarioFunction) {
    if(usuarioFunction.hasOwnProperty(prop2)){
        console.log(prop2,usuarioFunction[prop2]);
    }
}
