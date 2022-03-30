/*FizzBuzz é um algorítmo onde ele tem um valor de entrada e outros valores que vão fazer certas comparações baseado nesse valor de entrada*/ 

/* método sem arrow function

let num = 6



function fizzBuzz() {

    if (num % 3 === 0 && num % 5 != 0)
            return ('Fizz')

    else if (num % 5 === 0 && num % 3 != 0)
            return ('Buzz')

    else if(num % 3 === 0 && num % 5 === 0)
            return ('FizzBuzz')

    else if (num % 3 != 0 || num % 5 != 0) 
            return (num)
    
}

console.log(fizzBuzz())  

*/

let num = document.querySelector('input#num')
let bt = document.querySelector('input#bt')
bt.addEventListener('click',fizzBuzz)

function fizzBuzz() {

    if (num.value * num.value === 0)
            return alert('Digite um número!')

    else if (num.value % 3 === 0 && num.value % 5 != 0)
            return alert('Fizz')

    else if (num.value % 5 === 0 && num.value % 3 != 0)
            return alert('Buzz')

    else if(num.value % 3 === 0 && num.value % 5 === 0)
            return alert('FizzBuzz')

    else if (num.value % 3 != 0 || num.value % 5 != 0) 
            return alert(num.value)
}


/*Método com arrow function */


/*Forma para  o console 
let fizzBuzz = (num) => {

     if (typeof num != 'number')
            return ('Não é um número')

    else if (num % 3 === 0 && num % 5 != 0)
            return ('Fizz')

    else if (num % 5 === 0 && num % 3 != 0)
            return ('Buzz')

    else if(num % 3 === 0 && num % 5 === 0)
            return ('FizzBuzz')

    else if (num % 3 != 0 || num % 5 != 0) 
            return (num)

}

console.log(fizzBuzz(15))

*/

/*Estudar bastante nesses dias a prática de arrow functions, obs: arrow functions sem return só funciona se o resultado da function for imediato */

















