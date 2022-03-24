let aluno = {

    nome:'Rafael Pereira de Sousa',
    idade: 21,
    ano: 2000
};

console.log(aluno);


/* objeto de nome aluno na qual criei uma classe,aonde temos 3 keypairs,sendo suas chaves:nome,idade,ano que possuem como valores: string,number,number */




let lista = ['banana','chocolate','uva'];

console.log('hoje eu quero comer',lista[2])

/*Array de lista de coisas que quero comer, de acordo com a ocasião vou querer comer outra coisa */


let corSite = 'vinho';


function resetaCor() {
    corSite = 'azul';
};

console.log(corSite);
resetaCor();
console.log(corSite);


/*Após criar a função podemos aplica-la aonde quisermos,basta antes de aplicar no caso o console.log eu chamar essa função sem parâmetro,podemos colocar quantos parâmetros quisermos,basta separar por vírgula e concatenar na hora da aplicação  */

let cor_Site = 'Branco' ;

function reseta_Cor(cor) {
    cor_Site = cor;
};

console.log(cor_Site);
reseta_Cor('Verde');
console.log(cor_Site);



