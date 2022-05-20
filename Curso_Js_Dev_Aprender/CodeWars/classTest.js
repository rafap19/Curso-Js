/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/

 betterThanAverage = (yourPoints) => {

    let classPoints = [7.8,8.5,9.2]
    
    /*loop for of para definir se a nota do aluno é maior que todas as dos outros da classe */
    for(eachStudentPoint of classPoints){ 

     yourPoints > eachStudentPoint ? console.log(true): console.log(false) 
        break
                            
    } 
}            

  betterThanAverage(9.5)