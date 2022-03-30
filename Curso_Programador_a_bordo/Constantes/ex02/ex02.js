/*o const trabalha com escopo de bloco,ou seja está visível apenas naquele bloco,constantes não podem ser redeclaradas em um mesmo escopo,além disso também não pode ser atribuída*/ 

if (true) {
    const autor = 'Rafael';
        console.log(autor);
}

