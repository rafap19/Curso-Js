/*
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

countPositivesSumNegatives = () => {
    
    let countPositiveNumbers = 0;
    let sumNegativeNumbers = 0;
    let newArr = []

    /*loop forEach para contagem,utilizando o positiveNum como índice*/
    arr.forEach(positiveNum => positiveNum > 0 ? countPositiveNumbers = positiveNum :false)
    
    /*loop forEach para soma de valores negativos,utilizando o negativeNum como índice*/
    arr.forEach(negativeNum => negativeNum < 0 ? sumNegativeNumbers = sumNegativeNumbers + negativeNum:false)

    /*novo array com os valores da contagem e da soma e retornei esse array*/
    newArr.push(countPositiveNumbers,sumNegativeNumbers)
       return newArr
}

console.log(countPositivesSumNegatives())