var hora = 14

if(hora >= 6 && hora <12){
        console.log('Bom Dia!')
}else if(hora >=12 && hora <18){
        console.log('Boa Tarde!')

}else if(hora >=18 && hora <24){ 
        console.log('Boa Noite!')  //tem q haver coerência, meia noite n pode ser 00 aqui pois o número já é >=18

}else if(hora >=0 && hora <6){ 
        console.log('Boa Madrugada!')   
}        

