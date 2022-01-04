let nome_completo = document.querySelector('input#txtnome')
let nome_pai = document.querySelector('input#txtpai')
let nome_mãe = document.querySelector('input#txtmãe')
let ano_nascimento = document.querySelector('input#txtano')
let botão = document.querySelector('input#Enviar')
let radio_sim = document.querySelector('input#SIM')
let radio_não = document.querySelector('input#NÃO')
let res = document.querySelector('div#res')
botão.addEventListener('click',enviar)

function enviar(){
    res.innerHTML = `<h1 id = res_style>Seus dados forem coletados com sucesso!</h1>`
}



    
     