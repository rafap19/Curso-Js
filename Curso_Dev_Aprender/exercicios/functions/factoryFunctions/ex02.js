

function criaUsuario(nome,idade,email) {

  return {
    nome,
    idade,
    email
  }
}

const usuario = criaUsuario('Rafael',21,'rafap.19@hotmail.com')

    console.log(usuario)