var usuario =[
    'Rafael',
      21,
    'Programação',
      2019,
    'Brasileiro'   

];
    console.log(usuario);

    //Para adicionar um novo elemento no fim do array basta usar .push('colocar aqui o valor ')

        usuario.push('rj');
            console.log(usuario);

    //Para saber se um valor está contido no nosso array podemos utilizar o comando .includes('valor requerido'), o retorno será true ou false ')

        console.log(usuario.includes('rj'));

     //Podemos usar o indexOf também,mas diferente do includes ele mostra aonde está contido esse valor se for verdadeiro ')
    
        console.log(usuario.indexOf('rj'));   
     //Podemos usar o .concat para juntar 2 arrays ')

        var array1 = ['batata,leite,arroz'];
        var array2 = ['refrigerante'];
        var concat = array1.concat(array2);
            console.log(concat);

        //Podemos fazer de uma maneira mais inteligente criando um array de arrays, para isso basta inserir as variáveis com os arrays inseridos antecedidas de ...  que significa spread ou espalhar')//

            console.log([...array1, ...array2]);
        

        /*Array destructuring
            é um conceito aonde imprimimos os valores dos arrays de maneira individual através de variáveis,podemos junta-las através de vírgulas.
                               */
            console.log(usuario);
                var nome = usuario[0];
                var idade = usuario[1];
                var materia = usuario[2];
                var ano = usuario[3];
                var nacionalidade = usuario[4];
                var estado = usuario[5];
                    console.log(nome,idade,materia,ano,nacionalidade,estado);

                      /*Podemos fazer de uma maneira mais simplificada o mesmo código da forma abaixo,onde declaramos um variavel,escolhemos os nome das nossas variaveis e igualamos a variavel aonde estes arrays estão contidos, com isso ele automáticamente já filtra as posições dos arrays,com isso nós podemos imprimir os valores de cada array sem se preocupar aonde ele está.
                               */

                var [nome,idade,materia,ano,nacionalidade,estado]= usuario;
                    console.log(nome,idade,ano);
                
