let bt = document.querySelector('input#bt')
let tres = document.querySelector('div#tres')
let res = document.querySelector('div#res')

bt.addEventListener('click',clicar)

function clicar(){
    let n = prompt('Qual é o nome do funcionário?') // Nome
    let s = Number(prompt(`Qual é o salário de ${n}?`)).toFixed(2) //Salário Atual
    let p = Number(prompt(`O salário de ${n} vai ser reajustado em qual porcentagem?`)) //porcentagem
    let rj = ((s*p)/100).toFixed(2) // Reajuste Salarial
    let sr =(s*(1+p/100)).toFixed(2)  // salário reajustado

    tres.innerHTML = `<h2>${n} recebeu um aumento salarial!<h2>`
    res.innerHTML = `<p>O salário atual era <strong>R$${s}</strong><p>
                     <p> Com o aumento de <strong>${p}%</strong>,o salário vai aumentar <strong>R$${rj}</strong> no próximo mês.<p>
                     <p>E a partir daí,<strong>${n}</strong> vai passar a ganhar <strong>R$${sr}</strong>.<p>`


}