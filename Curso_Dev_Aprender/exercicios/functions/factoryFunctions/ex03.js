

function criaIdentidade(nome,nomeDaMae,nomeDoPai,cpf,anoDeNascimento) {

    return {

        nome,
        nomeDaMae,
        nomeDoPai,
        cpf,
        anoDeNascimento
    }
}

const identidade =  criaIdentidade('Rafael Pereira de Sousa','Gerlane de Sousa Pereira','Aurélio Santana de Sousa','161.401.187-78',2000)

    console.log(identidade)