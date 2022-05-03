/*Postagem Dinâmica */

function Post(data,titulo,mensagem,autor,visualizacoes,comentarios,estaAoVivo) {

    this.data = data
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor 
    this.visualizacoes = visualizacoes
    this.comentarios = comentarios
    this.estaAoVivo = estaAoVivo
}

const NewPost = new Post('04/05/2022 as 14:05','Dia de Champions League,quem vence essa  Semifinal?','Hoje é um dia especial,Manchester City e Real Madrid se enfrentam','Rafael Sousa',3045645,[{autor:'Abiel Pereira',mensagem:'Vai ser um jogão'}],'450 mil pessoas ao vivo')

    console.log(NewPost)