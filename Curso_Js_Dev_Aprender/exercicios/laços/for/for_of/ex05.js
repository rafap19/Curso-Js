

/*Crie um vetor chamado carros. Este vetor irá conter os valores “Gol”, “Uno”, “S10”, “Kadett”. Você também precisa criar uma variável que será o índice para percorrer este laço de repetição. No seu laço de repetição, utilize o console.log para mostrar todos os nomes dos carros que estão contidos no seu vetor.
 */

const carros = (['Gol','Uno','S10','Kadett'])

mostraCarros = () => {

    let  listaDeCarros;
    
    for(carro of carros) {

        let listaDeCarros = console.log(carro)
    }
        return listaDeCarros
}

mostraCarros()




