/*Post dinâmico com factory functions */

function createPost(titulo,mensagem,autor) {

    return {

        titulo,
        mensagem,
        autor,
        visualizacoes: 0,
        comentarios: [],
        estaAoVivo: false
    }
}
    let post = createPost('Dia de Estudo','Espero que você tenha estudado','Rafael Sousa')
        console.log(post)

    let secondPost = createPost('Dia de descansar','Um belo fim de semana','Rafael Sousa')
        console.log(secondPost)