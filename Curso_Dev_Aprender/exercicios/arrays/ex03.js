/*Esvaziando array */


let arr = [1,2,3,4,5]
    arr.splice(0,arr.length)
        console.log(arr)
        /*Neste caso esvaziamos utilizando o splice,determinando que queremos deletar a posição 0 e todo o array utilizando o metodo length  */

        arr.length = 0
        console.log(arr)
        /*Está é a maneira mais fácil de se fazer,apenas através do método length e atribuindo 0 ao total de elementos do array */

    