/*Obtenha a soma entre o total de dois arrays diferentes*/
let arr = [10,20,30]
let arr2 = [10,10,10,10]


function sumArr() {
    
    let somaArr = 0
    let somaArr2 = 0


    for(let i = 0; i < arr.length;i++){
        if(arr[i] >= 0) {
            somaArr = somaArr + arr[i]
        } 
    }

    for(let i2 = 0; i2 < arr2.length;i2++) {
        
        if(arr2[i2] >= 0) {
            somaArr2 = somaArr2 + arr2[i2]
        }
    }
        return somaArr + somaArr2


}

   console.log(`A soma entre os arrays será igual a: ${sumArr()}`)