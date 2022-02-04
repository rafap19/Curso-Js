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

        //Podemos fazer de uma maneira mais inteligente criando um array de arrays, para isso basta inserir as variáveis com os arrays inseridos antecedidas de ...  que significa spread ou espalhar')

            console.log([...array1, ...array2]);

    
