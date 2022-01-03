let idade = 18
console.log('SISTEMA DE IDENTIDADE')
    if(idade < 16){
        console.log('Não vota')
    }else if(idade == 16 || idade == 17){
        console.log('Voto não obrigatório')
    }else if(idade >= 18 && idade < 65){
        console.log('Voto Obrigatório')
    }else if(idade >=65 && idade <= 75){
        console.log('Voto não obrigatório')
    }else{
        console.log('Inapto para votar')
    }
     