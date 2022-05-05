const filme = {
    titulo: 'Vingadores',
    ano: 2022,
    personagem: 'Thor'
}

function exibirPropriedades(obj) {

    for (prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop])
        }
    }
}
exibirPropriedades(filme)