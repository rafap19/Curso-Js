const identidade =

     {

        nome:'Rafael Pereira de Sousa',
        nomeDaMae: 'Gerlane de Sousa Pereira',
        nomeDoPai:'Aurélio Santana de Sousa',
        cpf: '161.401.187-78',
        anoDeNascimento: 2000
    }


    showObjKeyValue = () => {

        for(pessoa in identidade) console.log(identidade[pessoa])
    }

    showObjKeyValue()

    

  