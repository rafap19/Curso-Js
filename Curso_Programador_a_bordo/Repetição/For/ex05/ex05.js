var condicao = true;
var contador = 1;

for(; condicao;) {
    if(contador % 5 === 0){
        condicao = false;
    }
    console.log(`condição boolenaa simples: ${contador}`);
    ++contador;
}