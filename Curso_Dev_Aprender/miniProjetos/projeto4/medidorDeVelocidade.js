let vel = document.querySelector('input#vel')
let bt = document.querySelector('input#res')
bt.addEventListener('click',medidorVel)

function medidorVel() {

    const velMax = 70
    const kmPorPonto = 5
    const pontos = Math.floor((vel.value - velMax)/kmPorPonto)

    if (vel.value * vel.value === 0) 

        return alert('Digite um Número!')
    
    else if (vel.value <= velMax)

        return alert('Está tudo ok,dirija com cuidado!')

    else if (vel.value >=71 && vel.value <= 74)

        return alert ('Você está acima do limite,abaixe a velocidade ou levará pontos na carteira!')

    else {

    if (pontos >= 12)

        return alert('Carteira Suspensa!')

    else

    return alert(`pontos na carteira: ${pontos}`)

    }
}




/*let medidorVel = (vel) => {

    if(vel <= 70)

        return ('Está tudo ok,dirija com cuidado!')
    
    else{

        const pontos = Math.floor(((vel - 70)/5))

        if (pontos >= 12)

            return('Carteira Suspensa')

        else

        return(`Pontos na carteira: ${pontos}`);
    } 
    
        
}

console.log(medidorVel(130))*/

