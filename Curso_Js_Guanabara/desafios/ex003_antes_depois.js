let bt = document.querySelector('input#bt')

bt.addEventListener('click',clicar)

function clicar(){
    let n = Number(prompt('Digite um número inteiro qualquer'))  //coloquei um number antes do prompt para que o valor que fosse colocado no prompt fosse convertido para número

    let antecessor = n - 1
    let sucessor = n + 1

    //Deu certo mas a pergunta é porque que quando eu ponho o Number antes do prompt ele não concatena,mas soma n + 1?E porque quando eu tentei por n ++ 1 que seria a atribuição correta ele não aceita?

    let answer = alert(`Antes de ${n},temos o número ${antecessor}.
    Depois de ${n},temos o número ${sucessor}.`)
}

