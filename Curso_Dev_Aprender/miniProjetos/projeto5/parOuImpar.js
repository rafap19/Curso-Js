let num = document.querySelector('input#num')
let bt = document.querySelector('input#bt')
bt.addEventListener('click',parOuImpar)

function parOuImpar() {

    num.value % 2 === 0 ? alert('Esse número é par!') : alert('Esse número é ímpar!');
    

}







/*
let parOuImpar = (num) => {

    if(num % 2 === 0)
        return('Esse número é par!')
    
    else
        return('Esse número é impar!')
}

console.log(parOuImpar(47))*/

