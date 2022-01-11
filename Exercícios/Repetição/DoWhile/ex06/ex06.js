let nota_1 = 6.5
let nota_2 = 1.7
let nota_3 = 5.7
let nota_4 = 9.8
let media = (nota_1 + nota_2 + nota_3 + nota_4)/4

    do{
        console.log('REPROVADO')
        media = media + 1
    }while(media < 8)