let c = Number(prompt('Digite uma temperatura em °C (Celcius)'))
let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conv')

bt.addEventListener('click',clicar)


function clicar(){
       let K = (c+ 273.15).toFixed(2)
       let F = (c*1.8) +32

            res.innerHTML = `<h2> A temperatura de ${c}°C, corresponde a...<h2`
            conv.innerHTML = `<p>${K}°K (Kelvin)<p>
                              <p>${F}°F (Fahrenheit)<p>`
 }


