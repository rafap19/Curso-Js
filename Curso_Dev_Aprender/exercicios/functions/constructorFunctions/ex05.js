

function Alimento(tipo,nome,codigo) {

    this.tipo = tipo
    this.nome = nome
    this.codigo = codigo
}

const alimento = new Alimento('Carnes','Cupim',2042)
    console.log(alimento)