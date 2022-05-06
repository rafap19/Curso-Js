let bt = document.querySelector('input#bt')
bt.addEventListener('click',check)

function check(){
    let letra = document.querySelector('input#txt').value
    letra = letra.toLowerCase()

    if(letra == 'a' || letra == 'e' || letra == 'i' || letra =='o' || letra == 'u'){
        alert('Vogal')
    }else{
        alert('Consoante')
    }
}


        