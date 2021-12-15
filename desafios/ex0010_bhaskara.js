let bt = document.querySelector('input#bt')
let tres = document.querySelector('div#tres')
let res = document.querySelector('div#res')

bt.addEventListener('click',clicar)

function clicar(){
    let va = Number(prompt('Qual é o valor de a?')) //Valor de a
    let vb = Number(prompt('Qual é o valor de b?')) //Valor de b
    let vc = Number(prompt('Qual é o valor de c?')) //Valor de c   
    let vd  = Number(vb**2) - (4*va*vc)  // Valor de Delta: b²-4ac
   
    

    tres.innerHTML = `<h2>Resolvendo Bhaskara<h2>`
    res.innerHTML = `<p>A equação atual é <strong>${va}x² + ${vb}x + ${vc} = 0</strong></p>
                     <p>O cálculo realizado será <strong>&Delta; = ${vb}²- 4 . ${va} . ${vc}</strong><p>
                     <p>O valor calculado foi <strong>&Delta; = ${vd}</strong><p>`

  
}