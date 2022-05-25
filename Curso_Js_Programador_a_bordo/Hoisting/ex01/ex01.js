/* Hoisting JavaScript é o deslocamento da declaração de todas as variáveis e funções para o topo do escopo. Toda declaração,seja de variável ou function sofrem o hoisting. */

function calcula() {
   return geraResultado()

   
    function geraResultado() {
        return (10 + 5)/ 3;
    }
       
}

    console.log(calcula());