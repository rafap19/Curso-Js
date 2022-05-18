const identidade =

     {

        nome:'Rafael Pereira de Sousa',
        nomeDaMae: 'Gerlane de Sousa Pereira',
        nomeDoPai:'Aurélio Santana de Sousa',
        cpf: '161.401.187-78',
        anoDeNascimento: 2000
    }


    showObjKeyValue = () => {

       for(infoPessoa in identidade) console.log(`${infoPessoa} : ${identidade[infoPessoa]}`)
    }

    showObjKeyValue()

    

  