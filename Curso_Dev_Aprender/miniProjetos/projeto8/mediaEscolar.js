//Exercício Nota Escolar
//Obter a média a partir de um array


/*
0 - 5.9: F
6.0 - 6.9: D
7.0 - 7.9: C
8.0 - 8.9: B
9.0 - 10: A
*/

const array = [80,80,100]

function mediaDoAluno(notas){

    let media = calcularMedia(notas)
     
     if(media < 59) return 'F'
     if(media < 69) return 'D'
     if(media < 79) return 'C'
     if(media < 89) return 'B'
     return 'A'
}

function calcularMedia(array){

    let soma = 0

     for (let valor of array){
         soma += valor
     }
     return soma/(array.length)
}

console.log(mediaDoAluno(array))