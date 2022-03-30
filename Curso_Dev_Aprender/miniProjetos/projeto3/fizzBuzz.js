/*FizzBuzz é um algorítmo onde ele tem um valor de entrada e outros valores que vão fazer certas comparações baseado nesse valor de entrada*/ 

let num = 6



let fizzBuzz = (num) => {

    if (num % 3 === 0 && num % 5 != 0)
            return ('Fizz')

    else if (num % 5 === 0 && num % 3 != 0)
            return ('Buzz')

    else if(num % 3 === 0 && num % 5 === 0)
            return ('FizzBuzz')

    else if (num % 3 != 0 || num % 5 != 0) 
            return (num)
    
}

console.log(fizzBuzz(6))

/*Estudar bastante nesses dias a prática de arrow functions */













