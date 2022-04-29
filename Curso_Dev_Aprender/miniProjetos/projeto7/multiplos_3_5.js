//crie uma função de soma que retorna a  soma de todos os múltplos de 3 e 5


function somar(limite) {

    let m3 = 0
    let m5 = 0

    for(let i = 0; i <= limite; i++){
        
       if(i % 3 === 0){
           m3 += i
       }

       if(i % 5 === 0){
        m5 += i
        }
        
    }
    console.log(m3 + m5) 
}
somar(10)

