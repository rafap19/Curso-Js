let bt = document.querySelector('input#bt')
let tres = document.querySelector('div#tres')
let res = document.querySelector('div#res')

bt.addEventListener('click',clicar)

function clicar(){
    let p = prompt('Qual é o produto que você está comprando?') //Produto
    let vp = Number(prompt(`Qual é o valor do produto '${p}'?`)) //Valor do Produto
    let cd = (vp/10).toFixed(2) //Calculo do desconto
    let d = (vp - cd).toFixed(2) //Desconto

    tres.innerHTML = `<h2>Calculo de 10% de desconto para o produto '${p}':<h2> `
    res.innerHTML = `<p>O preço original era <strong>R$${vp} reais</strong>.<p>
                     <p>Você acaba de ganhar <strong>R$${cd} reais</strong> de desconto <strong>(-10%)</strong>.
                     <p>No fim,você vai pagar <strong>R$${d} reais</strong> no produto <strong>'${p}'</strong>.<p>` //POR STRONG NOS 10% 
}