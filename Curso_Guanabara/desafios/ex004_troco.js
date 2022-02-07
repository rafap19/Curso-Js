let bt = document.querySelector('input#bt')
    bt.addEventListener('click',clicar)

function clicar(){
    let p = prompt('Que produto você está comprando?')
    let produto = Number(prompt('Quanto custa o produto que você está procurando?'))
    let dinheiro = Number(prompt('Qual foi o valor que você deu para pagar por esse produto?'))
    let troco = dinheiro - produto
    let resposta = alert(` Você comprou um ${p} que custou R$${produto}.
    Você deu R$${dinheiro} em dinheiro e vai receber R$${troco} de troco.
    Volte sempre :D `)


}