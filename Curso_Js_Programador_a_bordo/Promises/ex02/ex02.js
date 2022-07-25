const AGE = new Promise((resolve,reject)=>{
    const userAge = 22
        userAge >= 18 ? resolve('Apto para voto') : reject('Inapto para voto')
    }).then((fulfilled)=>{
        console.log(fulfilled)
}).catch((err)=>{
    console.log(err)
})

const AGE2 = new Promise((resolve,reject)=>{
    const userAge = 22
        userAge >= 18 ? resolve('Apto para voto') : reject('Inapto para voto')
    }).then((fulfilled)=>{
    return fulfilled.toUpperCase()
}).then((change)=>{
    console.log(change)
}).catch((err)=>{
    console.log(err)
})

//Encadeamento de promessas,podemos criar outros thens, a partir de um momento em que queremos tratar essa promise


const nome = new Promise((resolve,reject)=>{
    resolve({nome:'Rafael'})
})
    

const idade = new Promise((resolve,reject)=>{
    resolve({idade:22})
})

const profissao = new Promise((resolve,reject)=>{
    resolve({profissão:'Front-End Developer'})
})


const ALL = Promise.all([nome,idade,profissao]).then((fulfilled)=>{
    console.log(fulfilled)
})

const RACE = Promise.race([profissao,nome,idade]).then((fulfilled)=>{
    console.log(fulfilled)
})

//o race vai sempre mostrar a posição 0 do arr

