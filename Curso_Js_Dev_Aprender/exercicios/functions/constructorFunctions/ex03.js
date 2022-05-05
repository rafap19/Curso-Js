

function identidade(nome,nomeDaMae,nomeDoPai,cpf,anoDeNascimento) {

    this.nome = nome
    this.nomeDaMae = nomeDaMae
    this.nomeDoPai = nomeDoPai 
    this.cpf = cpf
    this.anoDeNascimento = anoDeNascimento
}

    const id =  new identidade('Rafael Sousa','Gerlande de Sousa Pereira','Aurélio Santana de Sousa','161.401.187-78',2000)

        console.log(id)