/*Obtenha a soma entre o total de dois arrays diferentes*/
let arr = [10,20,30]
let arr2 = [10,10,10,10]


sumArr = () => {
    
    let somaArr = 0
    let somaArr2 = 0


   for(i of arr) {

        if(i % 2 == 0){

            somaArr = somaArr + i
        }
   }

    for(i2 of arr2) {

        if(i2 % 2 == 0) {

            somaArr2 = somaArr2 + i2
        }
    }
            return somaArr + somaArr2


}

   console.log(`A soma entre os arrays será igual a: ${sumArr()}`)