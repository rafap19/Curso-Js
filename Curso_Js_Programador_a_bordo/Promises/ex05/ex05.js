fetch('https://viacep.com.br/ws/22770331/json/')
.then((data)=>{
    return data.json()
}).then((address)=>{
    console.log(address)
})

//utilizando promises com fetch api