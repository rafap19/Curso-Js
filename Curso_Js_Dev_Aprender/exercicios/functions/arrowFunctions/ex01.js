const alimentos = [
    {cod:3565,nome:'Alcatra'},
    {cod:4512,nome:'Coração de Alcatra'}
]

const alimento = alimentos.find(alimento => alimento.nome === 'Alcatra')

    console.log(alimento)

    /*a arrow function já sabe que tem que retornar por isso não é necessário utilizar o return */

    

    