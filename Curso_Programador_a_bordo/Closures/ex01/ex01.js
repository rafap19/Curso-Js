/* Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico. */

function imprimeNome() {
    let nome = 'Ayrton';
        return function() {
            return nome;
        }
}

    var func = imprimeNome();
    console.log(func())
    console.log(func()) 

    /*Podemos ver que mesmo a let nome estando lá atras essa função ainda se lembra que la atrás ela foi declarada com um nome,isso é closures */

    function minhaBiblioteca() {
        function auxiliar(valor) {
            return 10 + valor
        }
    }

    return {
        add5() {
            return auxiliar(5);
        },
        add7() {
            return auxiliar(7);
        }
    }

var biblioteca = minhaBiblioteca();
console.log(biblioteca)
console.log(biblioteca.add5())
console.log(biblioteca.add7())
