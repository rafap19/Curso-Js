

        /*Voce tem um array de números,retorne a soma de todos os valores positivos desse array */

        let numbers = [1,-4,7,12]

        positiveSum = () => {
            
           let soma = 0

           for(num of numbers) num >= 0 ? soma = soma + num : false
                return soma
        }
        

        console.log(positiveSum())


     
       

        
        
 



