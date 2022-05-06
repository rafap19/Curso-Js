                            /*Getters & Setters.    

Get = retorna um valor,utilizamos nesse caso o get para retornar o valor de uma função como se fosse o valor de uma propriedade,dessa forma não precisamos passar os parâmetros da função

Set = define a posição exata do valor que queremos imprimir,exige parametrização */

var usuarios = [{
    nome: 'Rafael',
    idade: 21
},


{
    nome: 'Bruna',
    idade: 21
},


{
    nome: 'Abiel',
    idade: 24
}]

    console.log(usuarios[2].nome);

    var usuario = {
        posicao: 0,
        
        get atual() {
            return usuarios[this.posicao]
        },

        set atual(posicao) {
            this.posicao = posicao;
        },
        proximo(){
            ++this.posicao;    //this se refere ao próprio objeto usuário,logo para acessar a propriedade posicao precisamos por o this,basicamente é um incremento,a mesma coisa na função anterior,usamos o this dessa vez para realizar um decremento
        },
        anterior() {
            --this.posicao;
        }
        
    };

        console.log(usuario.atual); /*  { nome: 'Rafael',idade: 21 }  */
            usuario.proximo();
        console.log(usuario.atual); /*  { nome: 'Bruna',idade: 21 }  */

            usuario.proximo();     
        console.log(usuario.atual); /*  { nome: 'Abiel',idade: 24 }  */

            usuario.anterior(); 
        console.log(usuario.anterior); /*  { nome: 'Bruna',idade: 21 }  */

            usuario.anterior(); 
        console.log(usuario.anterior); /*  { nome: 'Rafael',idade: 21 }  */


        usuario.atual = 0 //imprime a posição 0  da variável usuario
    console.log(usuario.atual); /*  { nome: 'Rafael',idade: 21 }  */

        usuario.atual = 1 //imprime a posição 1  da variável usuario
    console.log(usuario.atual); /*  { nome: 'Bruna',idade: 21 }  */
        

