/* escopo dinâmico: é aquele que o js só descobre na hora de execução,um exemplo desse escopo é o this */

function imprimiThis() {
    console.log('imprimiThis', this);
}

function imprimeMensagem() {
    imprimiThis.call({ msg: 'Sou um objeto'});
}

function imprimeMensagem2() {
    imprimiThis.call(['Sou um array']);
}


imprimeMensagem();
imprimeMensagem2();
imprimiThis()