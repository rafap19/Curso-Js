
function BuscaProduto(nomeDoProduto,skuDoProduto){

    return{

        nomeDoProduto,
        skuDoProduto
    }
}

const produto = BuscaProduto('Guitarra Fender Stratocaster AppleRed American Standard',365)
    console.log(produto)