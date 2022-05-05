/*Factory Functions - é uma função utilizada para chamar um objeto,dessa forma podemos criar vários objetos apenas trocando seus parâmetros */

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {

    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
    }
}

const celular1 = criarCelular('Apple',5.5,5000)
    console.log(celular1)
    

const celular2 = criarCelular('Samsumg',5.5,6000)
    console.log(celular2)