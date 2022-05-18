//Exercício Nota Escolar
//Obter a média a partir de um array


/*
0 - 5.9: F
6.0 - 6.9: D
7.0 - 7.9: C
8.0 - 8.9: B
9.0 - 10: A
*/

let boletim = [8.0,8.0,7.5,4.8]

mediaDoAluno = () => {

let soma = 0
let media = 0

    for(notas of boletim)
        soma = soma + notas
        media = (soma)/4
           
        if(media <= 5.9 && media >= 0){
            console.log(`Média: ${media} - Conceito F`)
        }else if(media <= 6.9 && media >= 6.0){
            console.log(`Média: ${media} - Conceito D`)
        }else if(media <= 7.9 && media >= 7.0){
            console.log(`Média: ${media} - Conceito C`)
        }else if(media <= 8.9 && media >= 8.0){
            console.log(`Média: ${media} - Conceito B`)
        }else if(media <= 10 && media >= 9.0){
            console.log(`Média: ${media} - Conceito A`)
        }else{
            console.log('Algo deu errado')
        }
}

mediaDoAluno()