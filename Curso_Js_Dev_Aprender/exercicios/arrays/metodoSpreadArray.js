/*Utilizamos o operador spread ou ... para unir dois arrays e remover também */

arr1 = [0,1,2,3]
arr2 = [4,5,6]

const arr = [...arr1,...arr2] // Juntando arrays utilizando spread
    console.log(arr)

const clone = [...arr] // Clonando arrays utilizando spread
    console.log(clone)





    