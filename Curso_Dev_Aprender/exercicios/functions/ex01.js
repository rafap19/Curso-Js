/*Usando variáveis como parâmetros em funções*/


let corSite = 'laranja';
function alteracor(cor,tonalidade) {
    corSite = cor + tonalidade;
}

console.log(corSite);
alteracor('vermelho ','escuro');
console.log(corSite);


let guitarraStratovalor = 5000;
function alteravalor(tipoDeGuitarra,valor){

    guitarraStratovalor = tipoDeGuitarra + valor;
};

console.log(guitarraStratovalor);
alteravalor('telecaster ', 6500);
console.log(guitarraStratovalor);


let lanche = 'cachorro quente';
function alteralanche(hamburguer,completo,molhoExtra) {

    lanche = hamburguer + completo + molhoExtra;
}


console.log(lanche);
alteralanche('Quero um X-Tudo ','com tudo que tem direito ','e com molho extra!');
console.log(lanche);


mediaRecFinal = 7;
function alteraNota(alunoEmpenhado) {
    mediaRecFinal = alunoEmpenhado;
}

alteraNota(6.0);
console.log(mediaRecFinal);
