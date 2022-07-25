//Podemos utilizar funções js como o setimeout com promises

const PROMISE = new Promise((resolve,reject)=>{
    
    let p = 'Rafael'
    if(p === 'Rafael'){
        resolve(p)
    }else{
        reject('Nome errado')
    }
}).then((suceed)=>{
    console.log(suceed)
}).catch((failed)=>{
    console.log(failed)
})

const PROMISE2 = new Promise((resolve,reject)=>{
    
    let p = 'Sousa'
     setTimeout(() => {
        
    if(p === 'Sousa'){
        resolve(p)
    }else{
        reject('Nome errado')
    }
    }, 3000);
    
}).then((suceed)=>{
    console.log(suceed)
}).catch((failed)=>{
    console.log(failed)
})