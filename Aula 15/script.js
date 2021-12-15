function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano) {  //se o valor de fano for igual a 0 ou
        window.alert('{ERRO} Verifique os dados e tente novamente!') 
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('Id', 'foto')
    if(fsex[0].checked) {
        genero = 'homem'  
        
        if(idade >=0 && idade <10) {
                    //criança

                    img.setAttribute('src','menino.png')
        }else if (idade <21) {       
                   //Jovem

                   img.setAttribute('src','adolescente_homem.png')
        }else if (idade <50){
            //Adulto

            img.setAttribute('src','homem.png')

        }else {
            //Idoso

            img.setAttribute('src','idoso_homem.png')
        }

    } else if (fsex[1].checked){
        genero = 'mulher'

        if(idade >=0 && idade <10) {
            //criança

            img.setAttribute('src','menina.png')
}else if (idade <21) {       
           //Jovem

            img.setAttribute('src','adolescente_mulher.png')
}else if (idade <50){
    //Adulto
            img.setAttribute('src','mulher.png')

}else {
    //Idoso
            img.setAttribute('src','idoso_mulher.png')
}
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
res.appendChild(img)
}

}
