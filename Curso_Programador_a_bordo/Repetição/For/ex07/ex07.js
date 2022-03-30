for(var i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
        console.log('utilizando continue:',i);
}

/* O continue faz o break de acordo com a condição estabelecida,a sua diferença é que ele vai testando cada valor um por um,no caso queremos apenas os números impares,então todos os valores serão testados,caso sejam impares ele para,caso contrário ele continua em looping*/