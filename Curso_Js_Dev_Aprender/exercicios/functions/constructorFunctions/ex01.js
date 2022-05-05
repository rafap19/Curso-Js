/*Constructor Function - faz a mesma coisa que o factory function,mas utilizamos o this para respresentar as chaves do nosso objeto e utilizamos o new para criar um novo objeto,diferente do factory que criamos um novo objeto através do return dentro da função.
*/



function Celular(marca,modelo) {

    this.marca = marca
    this.modelo = modelo
}


const cel = new Celular('apple','iphone 13')
    console.log(cel)
