let valores = [8,1,7,4,2,9]


//console.log(valores)

/*
console.log(valores[8])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for(let pos=0; pos < valores.length; pos++) {
    valores.sort()
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}

/* 
    Essa última forma é a mais inteligente,ela significa o seguinte:
    Crie uma variável pos de valor 0,enquanto esta for menor doque o falor total do array valores,some 1 ao seu valor.
    A explicação do console.log abaixo significa o seguinte:
    
    Para cada posição dentro da  variável valores,acrescente o valor de 1 se o mesmo for menor doque o valor total de 'valores'

    Resp completa:  Para cada posição dentro da  variável valores,acrescente o valor de 1 se o mesmo for menor doque o valor total de 'valores,além disso coloque os valores em ordem!
    
*/
 
    