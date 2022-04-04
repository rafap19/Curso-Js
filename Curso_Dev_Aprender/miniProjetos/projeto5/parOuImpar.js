/*let mostraValorImpar = () => {

    for(let num = 0; num <= 20; num++)

        if(num % 2 != 0)
            console.log(`${num} - Ímpar`)
        else console.log(`${num} - Par`)
}

mostraValorImpar() */


let num = document.querySelector('input#num')
let bt = document.querySelector('input#bt')
bt.addEventListener('click',mostraValorImpar)

function mostraValorImpar() {

    if (num.value % 2 != 0)
        alert(`${num.value} - Ímpar`)
    else  alert(`${num.value} - Par`)
}