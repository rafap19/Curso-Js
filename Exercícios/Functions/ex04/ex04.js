function somaTudo (numeros){
    var total = 0;
    for (var num of numeros) {
        total = total + num;
    }
        return total;
}
    var arrayNumeros = [3, 5, 7, 10, 9, 12];
    var resultado = somaTudo(arrayNumeros);
        console.log('somaTudo:',resultado);
