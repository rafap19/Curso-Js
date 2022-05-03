
    /*Utilizando Factory Function */
    
    function CriafaixaDePreco(tooltip,min,max) {

        return {

            tooltip,
            min,
            max
        }
        
    }

    const faixasDePreco = [

        CriafaixaDePreco('de R$0 até R$700','R$0','R$700'),
        CriafaixaDePreco('de R$700 até R$1000','R$700','R$1000'),
        CriafaixaDePreco('de R$1000 até R$10000','R$1000','R$10000')
    ]
        console.log(faixasDePreco)














        



    /*Utilizando Constructure Function */




    function Faixa(tooltip,min,max) {

        this.tooltip = tooltip,
        this.min = min,
        this.max = max
    }

    let faixaPreco = [

        new Faixa('de R$0 até R$700','R$0','R$700'),
        new Faixa('de R$700 até R$1000','R$700','R$1000'),
        new Faixa('de R$1000 até R$10000','R$1000','R$10000')
    ]
        console.log(faixaPreco)


        

        