const usuario =  {
    nome:'Rafael',
    idade:21,
    email: 'rafap.19@hotmail.com'
}

ShowUsuario = () => {

   for(user in usuario) console.log(`${user} : ${usuario[user]}`)
   
}
ShowUsuario()