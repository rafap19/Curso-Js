/*const numeros = [1,2,3,4,5]
let newNumeros = []

  for(num of numeros){
    newNumeros.push(num * 2)
  }
  console.log(numeros)
  console.log(newNumeros)
  
  faremos o mesmo com o map de uma maneira mais sofisticada


  o map é um método que espera como parâmetro uma função de callback,essa função ira iterar essa função sobre cada item do seu array(muito parecido com o loop forEach), obs: Quanto mais map em um código mais legível!
  */
 
  /*const numeros = [1,2,3,4,5]
    numeros.map(function(num){
        console.log(num)
    })*/

    const numeros = [1,2,3,4,5]
        const newNumeros = numeros.map(num => num * 2)
            console.log(newNumeros)

            


