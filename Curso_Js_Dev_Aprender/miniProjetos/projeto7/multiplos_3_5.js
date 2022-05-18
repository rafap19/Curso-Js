//crie uma função de soma que retorna a  soma de todos os múltplos de 3 e 5


somar = (limite) => {

    let m3 = 0
    let m5 = 0

    for(let i = 0; i <= limite; i++){

       i % 3 === 0 ? m3 = m3 + i:false
       i % 5 === 0 ? m5 = m5 + i:false  
    }
        return m3 + m5
        
        
}

console.log(somar(10))

