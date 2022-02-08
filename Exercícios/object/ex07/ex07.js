                /*Object destructuring      
 podemos extrair propriedades de um objeto e armazenando em variáveis,para isso primeiro criamos uma var{},dentro dos colchetes acrescentamos os nomes que queremos dar para essas variaveis e depois do " = ", acrescentamos o nome do objeto de onde queremos extrair essas propriedades */

 var novoUsuario = {
     nome: 'Rafael',
     idade: 21,
     pais: 'Brasil'
 };

    /* Maneira não intuitiva de fazer isso:

            var nome = 'Rafael'
            var idade = 21
            var pais = 'Brasil'  */

            /*Usando Object Destructuring */

 var {nome, idade, pais} = novoUsuario;
    console.log(nome, idade, pais);

    //Dessa forma temos autonomia para imprimir qualquer uma delas

    console.log (nome);
    
    //Além disso ainda podemos imprimir mais de uma ao mesmo tempo

    console.log(idade, pais);

    //Podemos alterar o nome do atributo extraído da seguinte forma

    var { nome: novonome} = novoUsuario;
        console.log(novonome)
