let vendas_mes = document.querySelector('input#bt')
let res = document.querySelector('div#res')
    bt.addEventListener('click',Pagar)

    function Pagar(){
    let vendas = Number(prompt('Quantas vendas você realizou nesse mês'))

        if(vendas < 5 > 0 ){
            alert('estou no prejuizo!')

        }else if(vendas >= 5 && vendas <= 10){
            alert('consigo pagar minhas contas tranquilamente')

        }else if(vendas >=11){
           alert('consigo pagar as minhas contas e sobra um bom dinheiro')
           
           res.innerHTML = `<h2 id ='js'>O vendedor conseguiu realizar ${vendas} vendas<h2>` 
        }

    }
  