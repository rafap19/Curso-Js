let object = document.querySelector('input#b')

object.addEventListener('click',clicar)


function clicar(){
 
let ask_name = prompt('Qual é o seu nome?') //Precisei criar a variável ask para poder utilizar como formatação
let ask_age = prompt(`Olá ${ask_name}! Quantos anos você tem?`)
let answer = alert (`Acabo de conhecer ${ask_name},que tem ${ask_age} anos de idade :) `)

 




}

