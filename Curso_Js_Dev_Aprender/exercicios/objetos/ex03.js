

const identidade =

     {

        nome:'Rafael Pereira de Sousa',
        nomeDaMae: 'Gerlane de Sousa Pereira',
        nomeDoPai:'Aurélio Santana de Sousa',
        cpf: '161.401.187-78',
        anoDeNascimento: 2000
    }


    console.log(identidade)


    const newIdentidade = Object.assign(identidade,{Trabalho: 'Programador'})
        console.log(newIdentidade)

        /*Obs: como visto acima é possível alterar a ordem,podendo chamar o objeto primeiro e colocar a nova chave abaixo,dessa forma podemos dar mais atributos ao objeto */