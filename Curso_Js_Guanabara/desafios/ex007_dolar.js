let cota = Number(prompt('Antes de mais nada.Quanto está a cotação do dólar agora?'))
let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let  d =  document.querySelector('div#d')

bt.addEventListener('click',clicar)

function clicar(){
    let reais = Number(prompt('Quantos reais você tem na carteira?'))
    let dolar = (reais/cota).toFixed(2)

    if(reais >5.57){
  
    res.innerHTML = `<h2> Se você tem R$${reais} reais na carteira,você pode conseguir U$${dolar} dolares americanos` 
    }else if(reais == 5.57){
        
    res.innerHTML = `<h2> Se você tem R$${reais} reais na carteira,você pode conseguir U$${(dolar)} dolar americano`
    }else if(reais <5.57 && reais >1){
        
        res.innerHTML = `<h2> Se você tem R$${reais} reais na carteira,você pode conseguir U$${dolar} cents americanos`

    }else if (reais == 1){
        res.innerHTML = `<h2> Se você tem R$${reais} real na carteira,você pode conseguir U$${dolar} cents americanos`
    }


}


