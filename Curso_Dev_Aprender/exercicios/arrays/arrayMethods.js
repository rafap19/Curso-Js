
/*
    métodos de um array de valores primitivos(string,number,boolean)
unshift - adiciona o elemento no início do array

  splice - adiciona o elemento no meio do array, esse possui 3 propriedades:

  1 - qual posição queremo adicionar esse elemento

  2 - Se queremos deletar alguma posição 

  3 - oque queremos adicionar
---------------------------------------------------------------------------------------------------------------------
push - adiciona um novo elemento no final do array

indexOf - retorna a posição do valor colocado em parênteses e que esteja dentro do array,caso o valor não seja achado o js retorna -1

lastindexOf - faz a mesma coisa, mas ele busca a ultima vez que esse elemento ocorreu,por exemplo:

    caso tenhamos um array [ 0, 2 ,3 ,2]  o lastindexOf retorna a posição que está o último número 2 que aparece no array,neste caso seria posição 3

---------------------------------------------------------------------------------------------------------------------

includes - Nos mostra  através de um valor booleano se existe tal valor dentro de um array ou não

*/


const arr = ['KitKat','Kinder Ovo','Sorvete']
        console.log(arr)

    arr.unshift('Alpino')
        console.log(arr)

    arr.splice(1,0,'Kinder Bueno')
        console.log(arr)

    arr.push('Lindt')
        console.log(arr)

    console.log(arr.indexOf('Lindt'))

    console.log(arr.includes('Alpino'))


        
