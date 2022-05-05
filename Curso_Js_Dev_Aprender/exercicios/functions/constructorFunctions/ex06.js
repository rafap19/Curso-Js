/*Postagem Dinâmica */

function Post(titulo,mensagem,autor) {

   
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor 
    this.visualizacoes = 0
    this.comentarios = []
    this.estaAoVivo = false
}

let NewPost = new Post('Dia de Champions League,quem vence essa  Semifinal?','Hoje é um dia especial,Manchester City e Real Madrid se enfrentam','Rafael Sousa')

    console.log(NewPost)


