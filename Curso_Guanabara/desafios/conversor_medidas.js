let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conversao')
bt.addEventListener('click',clicar)


function clicar(){
    let M = Number(prompt('Digite a distância em metros(m)'))
    let Km = (M/1000).toFixed(3)
    let Hm = (M/100).toFixed(3)
    let Dam = (M/10).toFixed(3)
    let dm  = (M*10)
    let cm  = (M*100)
    let mm  = (M*1000)

    res.innerHTML = `<h2>A distância de ${M} metros,corresponde a...<h2>`

    conv.innerHTML =   `<p>${Km} quilômetros (Km)<p>
                             <p>${Hm} hectômetros (Hm)<p>
                             <p>${Dam} Decâmetros (Dam)<p>
                             <p>${dm} decímetros (dm)<p>
                             <p>${cm} centímetros (cm)<p>
                             <p>${mm} milímetros (mm)<p> `


                             
   
    



 
    

}


