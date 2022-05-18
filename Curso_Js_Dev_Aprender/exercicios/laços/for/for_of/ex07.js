/*Crie dois arrays de inteiros e some os valores por posição,por fim imprima um terceiro array que contenha a soma de cada par,ambos arrays devem ter a mesma largura.

Ex:

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
output [12, 7, 16]
*/

let arr_1 = [4,6,7]
let arr_2 = [8,1,9]

somaArraysPorPosition = () => {

    let soma_ArrPorPosition;


    
    for(i of arr_1){
         
        if(i >= 0) {
        
        const pos0 = arr_1[0] + arr_2[0]
        const pos1 = arr_1[1] + arr_2[1]   
        const pos2 = arr_1[2] + arr_2[2]    
        soma_ArrPorPosition = [pos0,pos1,pos2]
        }

    }

    return soma_ArrPorPosition
}
console.log(somaArraysPorPosition())


