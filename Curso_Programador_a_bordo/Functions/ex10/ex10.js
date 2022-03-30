/* A palavra "this" é uma palavra reservada que dependendo de onde for usada possui um valor diferente,para alterar o valor de this utilizamos o operador new */

    //exemplo sem alteração
function Usuario() {
    console.log(this);
}
    Usuario();

    //exemplo alterado,quando utilizamos o new em uma função o valor do this passa a se tornar um objeto dessa função

    function Usuario() {
      this.nome = 'Rafael'
      this.idade = 21
      this.soma = function(a, b) {
          return a + b;
      }
    }

    var usuario = new Usuario();
    console.log(usuario)

    console.log(usuario.nome);
    console.log(usuario.idade);
    console.log(usuario.soma(10, 4));
