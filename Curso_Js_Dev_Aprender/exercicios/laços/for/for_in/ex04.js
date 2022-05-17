let buscaAlimento = {

    alimento: 'Alcatra',
    numero:   2506
}


buscaAlimentos = () => {

    for(alimento in buscaAlimento)
     console.log(`${alimento} : ${buscaAlimento[alimento]}`)
}

buscaAlimentos()