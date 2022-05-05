

function Produto(tipo,nome,codigo) {

    this.tipo = tipo
    this.nome = nome 
    this.codigo = codigo
}

const produto = new Produto('Instrumentos Musicais','Guitarra Fender Telecaster Blue American Standard',3084)
    console.log(produto)