let num = [8,1,7,4,2,9]

for(let pos in num){    
    num.sort()
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}

/*let pos in num = Para cada posição dentro de num,escreva num[pos] 
    ou para cada ${num[pos]}, escreva o número de acordo com a posição.

    por exemplo:

    Começamos escrevendo console.log(num[0]). O valor de num[0] é  igual a  8, logo o valor mostrado será 8, e assim sucessivamente)

*/

/*

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}


    for(let pos in num){    
    console.log(num[pos])

}

AMBAS SIGNIFICAM A MESMA COISA : a segunda é mais simples,ela diz que enquanto a variavel num estiver com uma outra pos dentro dela que o js mostre esse valor

*/


