/*const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};

for(let chave in pessoa) {
    console.log(pessoa);
}*/

/*Criamos um for aonde primeiro a variavel puxa somente as chaves, colocamos o in e referenciamos  o nome da variável aonde está situado o objeto. Para puxar os valores,após a vírgula inserímos o nome da variavel do objeto. e o nome da chave de onde queremos tirar o valor

const cores = ['verde', 'azul','amarelo']
    for(let indice in cores) {
        console.log(indice,cores[2])
    }*/



    const filme = {
        categoria: 'ficção',
        ano: 2000
    }

    for(let key in filme) {

        console.log(key,filme.categoria,)
    }