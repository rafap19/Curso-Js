/* Escopo é oque define a visibilidade das variáveis e funções,dependendo do escopo da qual essas variáveis e funções pertencem elas podem ser ou não visíveis em outros lugares */

/* Escopo Global: é aquele que é declarado no arquivo principal do js,ou seja é acessível em toda a aplicação,neste caso declaramos a var nome, que no caso foi exibida como função e de maneira comum e continua funcionando*/

var nome = 'Rafael'
    console.log(nome);

function imprimeNome() {
    console.log(nome);
}
    imprimeNome();

