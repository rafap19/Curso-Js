/* Uma função callback é uma função que é passada como parâmetro dentro de um função e executada dentro dela mesma,geralmente no fim do código  */

function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b);
}

    console.log(somaCallback(10,3, function(total) {
        return total * 2;
    }));

    /* Podemos fazer através de variáveis também */

    var multiplica = function(total) {
        return total * 2;
    }
        console.log(somaCallback(10,3, multiplica));