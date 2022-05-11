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


    
    for(let i = 0;i < arr_1.length;i++){
         
        if(arr_1[i] >= 0) {
        
        const pos0 = arr_1[0] + arr_2[0]
        const pos1 = arr_1[1] + arr_2[1]   
        const pos2 = arr_1[2] + arr_2[2]    

        soma_ArrPorPosition = [pos0,pos1,pos2]
    
            
        }

    }

    return soma_ArrPorPosition
}
console.log(somaArraysPorPosition())

/* Primeiro criei uma variavel sem atribuição, depois fiz um for aonde ele irá percorrer todo o arr_1(poderia ser o arr_2 também tanto faz porque ambos tem as mesmas quantidades de elementos),após isso crio uma condição que será executada se o valor da posição do índice do arr_1 for maior ou igual a 0.Nesta condição criei variáveis para as 3 posições aonde cada uma fará uma soma entre a posição do arr1 e do arr2,depois peguei a variável sem atribuição e coloquei como atribuição um array aonde pûs cada posição em sua ordem devida,por fim retornei a variavel 'soma_ArrPorPosition' na qual agora já está atribuída as posições e dei um console log nessa função */

