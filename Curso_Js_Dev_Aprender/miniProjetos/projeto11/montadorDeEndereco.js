
let endereco = {
    rua: 'Miguel Salazar',
    cidade: 'Taquara',
    cep: 22770331
}

function exibirEndereco(endereco){
    
    for(let chave in endereco)
        console.log(chave,endereco[chave])
}

exibirEndereco(endereco)


