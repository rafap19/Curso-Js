/*A sintaxe do filter é bem parecida com o do map
mas os valores precisam retornar true ou false,pois estamos
filtrando oque queremos que seja apresentado nesse novo array */


const numbers = [1,2,3,4,5,6]
const FilterEvenNumbers = numbers.filter(num => num % 2 == 0 ? true : false)
    console.log(FilterEvenNumbers)


    
   