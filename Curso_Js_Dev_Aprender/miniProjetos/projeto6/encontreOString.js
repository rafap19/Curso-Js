const filme = {
    titulo: 'Vingadores',
    ano: 2022,
    personagem: 'Thor'
}

function exibirPropriedades() {

   for(prop in filme) console.log(`${filme[prop]}`)
}
exibirPropriedades()