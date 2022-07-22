//Caso mais real,utilizando com API fetch,na qual retorna uma promisse(utilizaremos a API do github)

const USERNAME = 'rafap19'

 fetch(`https://api.github.com/users/${USERNAME}`,{

    method:'GET',
    headers:{
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response)=>{
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)
})

/*Primeiro fazemos a requisição fecth,no primeiro then retornamos o valor em json e no segundo basta usar os dados */


