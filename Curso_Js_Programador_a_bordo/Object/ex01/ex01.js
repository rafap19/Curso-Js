/* São valores que permitem uma coleção de valores, é como se fossem váriavéis dentro de uma única variável, as chaves seriam os nomes das variáveis,e os valores seriam os próprios valores*/

var usuario = {

    nome: 'Rafael',
    idade: 26,
    youtube: 'Scriptando Js',
    'ultimo-nome' : 'sousa'
    
};
    

    /* Podemos ainda manibular tais chaves de maneira individual */

    console.log(usuario.youtube);
    console.log(usuario.nome);

    /*Não podemos criar propriedades com acentuação,caso seja necessário precisamo criar essa propriedade como string e utilizar o colchete para indicar a chave */

    console.log(usuario['ultimo-nome']);

    /* Para adicionar uma nova chave basta criar um novo a partir de . + nome = valor que você deseja */

    usuario.anoatual = 2022;
        console.log(usuario);

        /*Para deletar uma chave basta adicionar delete + var.nome da chave */

        delete usuario.anoatual;
            console.log(usuario);

        /*Podemos adicionar qualquer tipo de valor a tal variavel,seja array,object,functions e etc */

        usuario.hobbies = ['fifa', 'programação', 'futebol', 'guitarra']
            console.log(usuario);
        
        usuario.competencias = {
                linguagens: ['Javascript','Python','Php'],

                instrumentosMusicais: ['Guitarra', 'Violão', 'Piano']
        }
        console.log(usuario)
