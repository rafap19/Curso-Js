function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data)=> data.json())
    .catch((err)=> console.log(err))
}

showUserName(11)

/*podemos ainda utilizar com try e catch que funcionam como o  resolve e reject das promises


async function showUserName(id) {
    
    try {
        const user = await getUser(id)
        console.log(`O nome do usuário é: ${user.data.first_name}`)
} catch (err) {
    console.log('usuário não encontrado!')
    }
}



*/

