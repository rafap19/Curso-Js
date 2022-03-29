/*Escreva uma função que usa 2 números e retorna o maior entre eles */


/*forma simples(para imprimir aqui no js) 


let valorMaior = returnBiggerValue(5,15)

function returnBiggerValue(n1,n2) {
    if(n1 > n2) {
        return(n1)

    }else if(n1 < n2) {
        return(n2)

    }else
        console.log('Os valores são iguais')
    
}
console.log(valorMaior)
/*




/*forma mais avançada(para imprimir na web)*/

let n1 = (document.querySelector('input#n1'))
let n2 = (document.querySelector('input#n2'))
let bt = (document.querySelector('input#bt'))
bt.addEventListener('click',returnBiggerValue)

function returnBiggerValue() {

    if(n1.value > n2.value) {
       alert(n1.value)

    }else if(n1.value < n2.value){
        alert(n2.value)

    }else{
        alert('os valores são iguais!')
    }
}

/*Questionamento: porque quando eu insiro um valor acima de 3 unidade por exemplo 100 o valor é considerado como menor e não maior?Vale ressaltar que não funciona com valores como 100 e 222,mas testando 524 ele funciona,vale ainda ressaltar que no console ele considera o 100 como maior */








