

exibirTipo = (limite) => {

    for(let i = 0; i <= limite; i++)
        
        i % 2 == 0 ? console.log(`${i} - PAR`)
        :console.log(`${i} - ÍMPAR`)
}
exibirTipo(20)