//no js começamos uma contagem a partir do 0,partindo desse princípio podemos puxar valores dos arrays declarando a sua posição,exemplo se nesse caso queremos o macarrão teremos que por a posição 2

let alimentos = ['arroz','feijão','macarrão'];
    console.log(alimentos[2]);

    /*propriedades interessantes em arrays

            1 - console.log(variavel.length); = imprimi a quantidade de valores que tem em um array,nesse caso seria console.log(numeros.length);

            2 - console.log(variavel.pop()); =  imprimi o último valor do array e tira ele da lista do array.


            3 - console.log(variavel.slice()); =  imprime uma fatia do array. os parâmetros são a primeira e última posição,no entanto para que ele imprima a sua posição final você precisa somar + 1; 
                    ex:

                var numeros = [5, 3, 12, 17, 10, 99];
                    digamos que eu queira os números 12 e 17, utilizamos o slice, ele consegue me trazer a posição inicial,o 17 esta na posição 3,no entanto para que o slice o encontre eu preciso somar + 1,logo temos 2 e 4

               console.log(numeros.slice(2,4));



            4 - console.log(variavel.join); =  é utilizada para transformar os valores do array em uma string,para isso precisamos usar um separados '' que pode ser vazio ou pode ter algum símbolo.
                
             
  
  */

