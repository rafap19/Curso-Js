function primeiraFuncao(){
    return new Promise((resolve)=>{
       setTimeout(() => {
        console.log('Segunda')
        resolve()
       }, 2000);
    })
}

async function segundaFuncao(){
    console.log('Primeira')
    await primeiraFuncao()
    console.log('terceira')
    
}

segundaFuncao()