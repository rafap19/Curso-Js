/* Hoisting JavaScript é uma forma com qual a engine do javascript se comporta em relação a variáveis e funções,oque acontece é que o js move as declarações de variávies e funções para o topo do escopo.

ex:

console.log(a)
    var a; 

    quando declaramos uma variavel var depois de printar ele funciona normalmente,isso porque a declaração vai para o topo do escopo,isso ainda que a declaração venha dpois o js leria esse código da seguinte forma:

    var a;
        console.log(a)

        tendo como resultado undefined.

     precisamos entender a diferença entre a declaração e atribuição,por exemplo se nós temos var a = 123
     a declaração é var a e a sua atribuição seria a = 123. ex:


     se escrevemos 

     console.log(a)
        var a = 123


    a engine js vai interpretar

    var a;
        console.log(a)
        a = 123

    tendo como resultado ainda undefined. Isso porque a engine só leva para o topo do escopa a declaração e não a sua atribuição, para printarmos o números teremos que novamente utilizar o console.log(a)

    obs 1 : o ideal é tirar benefício de hoisting em function,mas em variáveis não é recomendado

    obs 2: tanto as variáveis de escopo let e const não sofrerão hoisting,eles sofrerão oque é chamado de 'temporal deadzone' que imprimirá um 'Reference Error',logo tais não podem ser declaradas depois da impressão pois não sofrem hoisting.

    obs 3: geralmente não é recomendado a utilização de hoisting,mas depende do estilo de código do desenvolvedor. Ainda que não utilizado é importante ser entendido.



*/
var a;
console.log(a)
    a = 123
    console.log(a)

/*Ex com function 


 console.log(soma(10,5))
    var soma = function(a,b) {
        return a + b
    }

    printara um erro dizendo que soma não é uma função,isso porque a engina faz o seguinte

    var soma;
        console.log(soma(10,5))
            soma = function(a + b) {
                return a + b
}

as function declaration(as funções comuns) sofrem o hoisting,logo não há problema em printar o resultado antes da realização da mesma,isso porque a function vai para o topo do escopo.

ex:

console.log(soma(10,5))
    function soma(a,b) {
        return a + b
    }


na verdade será interpretado pelo js como:

function soma(a,b) {
        return a + b
}
    console.log(soma(10,5))
    
*/

/*tirando benefício de hoisting,utilizando o mesmo podemos já retornar o resultado da nossa função de cara,dessa forma o leitor já entenderá melhor oque o código fará,em casos em que há muita lógica podemos tirar bom proveito de hoisting em funções,facilitando assim então a leitura */
calcula = () => {
    return geraResultado()
 
    
     function geraResultado() {
         return (10 + 5)/ 3;
     } 
 }

 console.log(calcula())




