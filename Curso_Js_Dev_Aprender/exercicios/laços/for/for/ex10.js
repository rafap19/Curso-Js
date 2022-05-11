

        /*Voce tem um array de números,retorne a soma de todos os valores positivos desse array */

        let arr = [1,-4,7,12]

        positiveSum = () => {
            
           let soma = 0

           for(let i = 0; i < arr.length;i++) {

                if(arr[i] >= 0) {

                    soma = soma + arr[i]
                }
           }
                return soma
        }

        console.log(positiveSum())


        /*Primeiro criamos uma variável de valor 0, depois criamos um for aonde o índice será 0 e será menor que o total do array,básicamente oque estamos falando é que enquanto o valor do índice for menor que o total do array o valor de i deve ser incrementado. Logo depois criamos um if aonde pegamos o nosso arr na posição do nosso índice e afirmamos que caso este seja maior ou igual a 0 a variavel soma deve ser igual ao valor dela mesmo mais o arr na posião do índice,por fim retornamos a variavel soma */
       

        
        
 



