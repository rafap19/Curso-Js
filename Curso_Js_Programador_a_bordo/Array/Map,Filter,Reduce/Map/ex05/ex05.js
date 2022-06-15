const arr = [10,20,30]
const arr2 = [10,10,20]

sumArr = () => {
    let somaArr = 0
    let somaArr2 = 0

arr.map(i => i % 2 == 0 ? somaArr = somaArr + i : false)  
arr2.map(i2 => i2 % 2 == 0 ? somaArr2 = somaArr2 + i2 : false)
    return somaArr + somaArr2
}

  console.log(sumArr())

