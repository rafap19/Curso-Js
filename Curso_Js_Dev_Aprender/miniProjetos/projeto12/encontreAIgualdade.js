

function Endereco(rua,cidade,cep) {

    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}

const endereco1 = new Endereco('Miguel Salazar','Rj',22770331)
const endereco2 = new Endereco('Miguel Salazar','Rj',22770331)
    

function saoIguais(endereco1,endereco2) {

   return endereco1.rua === endereco2.rua  &&
          endereco1.cidade === endereco2.cidade &&
          endereco1.cep === endereco2.cep

}

console.log(saoIguais(endereco1,endereco2))




function temEnderecoMemoriaIguais(endereco1,endereco2){

    return endereco1 === endereco2
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2))