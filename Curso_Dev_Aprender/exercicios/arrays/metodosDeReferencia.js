/*métodos de um array de valores de referência(Objeto,array,function) 

find - é uma função que precisa de um parâmetro function que determine oque queremos buscar e retorna o primeiro valor que satisfazer a condição desse método dentro do array




*/

    const alimentos = [
        {cod:3565,nome:'Alcatra'},
        {cod:4512,nome:'Coração de Alcatra'}
    ]

    const alimento = alimentos.find(function(alimento){

        return alimento.nome === 'Alcatra'
    })

        console.log(alimento)