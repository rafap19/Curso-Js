/*Obtenha a soma entre o total de dois arrays diferentes*/
let arr = [10,20,30]
let arr2 = [10,10,10,10]


sumArr = () => {


    let somaArr = 0
    let somaArr2 = 0
   

    arr.forEach(i => i % 2 == 0 ? somaArr = somaArr + i : false )
    arr2.forEach(i2 => i2 % 2 == 0 ? somaArr2 = somaArr2 + i2 :false )
        return somaArr + somaArr2

}

console.log(sumArr())