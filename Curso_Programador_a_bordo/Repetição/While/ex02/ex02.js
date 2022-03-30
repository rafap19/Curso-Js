/* Podemos usar o comando break + ifs para parar uma interação de um loop,no caso enquanto o contador for menor que 5 ele vai somar 1 ao valor desse contador,mas se ele for igual a 3 ele para.*/
var contador = 0;
while(contador < 5) {
    if(contador === 3) {
        break;
}
    console.log(contador);
        ++contador;
}