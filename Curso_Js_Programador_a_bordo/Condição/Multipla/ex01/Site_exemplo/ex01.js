let hora = 17

switch(hora){
    
    case 0: hora < 17 
        console.log('Ainda é muito cedo para pedir um lanche!')
            break

    case 1: hora == 17 
        console.log('Vou comer um bolo e tomar um café!')
            break   

    case 2: hora > 17 && hora < 22.30
        console.log('Ainda não posso pedir o lanche,se eu pedir vou ficar com fome mais tarde!')
            break        
            
    case 3: hora >= 22.30 && hora < 24
        console.log('Está na hora de finalmente pedir o meu lanche!')
            break   
}