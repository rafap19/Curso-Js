/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

 */

let numbers = [2,4,6]
let newArr = []



doubled = () => {

    numbers.forEach(num => newArr.push(num + num)) 
            return newArr
}

console.log(doubled())