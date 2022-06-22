
/*
    métodos de um array de valores primitivos(string,number,boolean)


unshift - adiciona o elemento no início do array

  splice - adiciona o elemento no meio do array, esse possui 3 propriedades:

  1 - qual posição queremos adicionar esse elemento

  2 - Se queremos deletar alguma posição 

  3 - oque queremos adicionar
---------------------------------------------------------------------------------------------------------------------
push - adiciona um novo elemento no final do array

indexOf - retorna a posição do valor colocado em parênteses e que esteja dentro do array,caso o valor não seja achado o js retorna -1

lastindexOf - faz a mesma coisa, mas ele busca a ultima vez que esse elemento ocorreu,por exemplo:

    caso tenhamos um array [ 0, 2 ,3 ,2]  o lastindexOf retorna a posição que está o último número 2 que aparece no array,neste caso seria posição 3

---------------------------------------------------------------------------------------------------------------------

includes - Nos mostra  através de um valor booleano se existe tal valor dentro de um array ou não

pop - ele armazena o último valor do array dentro de uma variável,se você dar um console.log verá que o último elemento desse array anterior terá sido removido

shift - faz a mesma coisa que o pop,mas se refere a primeira posição

join - coloca algo entre os valores,por exemplo podemos por um - entre os valores, ao invés de um array ficar [0,1,2] ele ficaria [0-1-2]. Para isso precisamos armazenar o método join dentro de uma variável



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



   const posFinal = arr.pop()
    console.log(posFinal)
    console.log(arr)



    const posInicial = arr.shift()
        console.log(posInicial)
        console.log(arr)



    const posMeio = arr.splice(2,1)
        console.log(posMeio)
        console.log(arr)


    /*Deixando o Array Vazio */

        arr.length = 0
            console.log(arr)

    
    const segundoArr = [0,1,2,3,4,5]
        const join = segundoArr.join('-')
            console.log(join)



    

    
    


    


        
