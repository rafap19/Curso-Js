function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()     
    msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
   //Bom Dia !
   img.innerHTML = '<img src="manha.png">'
   document.body.style.background = '#a08d84'

} else if (hora >= 12 && hora < 18){
   //Boa Tarde 
   img.innerHTML = '<img src="tarde.png">'
   document.body.style.background = '#fbb350'

} else {
    //Boa noite
    img.innerHTML = '<img src="noite.png">'
    document.body.style.background = '#161d27'
  }

}



