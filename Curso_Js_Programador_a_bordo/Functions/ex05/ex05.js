/* o parâmetro rest é utilizado quando quisermos por algum complemento, tais complementos são armazenados dentro de um array, para utilizar tal parâmetro basta por ...+nome da variável e o array vai para essa variável*/

function escreverEndereco(rua, cidade, país, ...complementos){

    console.log(rua);
    console.log(cidade);
    console.log(país);
    console.log(complementos);
}
    escreverEndereco('Rua 8', 'Rj', 'Brasil','taquara', '424', 'bloco 2', 'ap 212');