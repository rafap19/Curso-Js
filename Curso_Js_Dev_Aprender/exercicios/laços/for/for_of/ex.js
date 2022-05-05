/*Funciona melhor que o for in iterar itens de um  array */


const cores = ['Vermelho,Verde,Azul'];

for(let cor of cores) {
    console.log(cor[5]);
}

/*ele imprime l porque a 5 posição é justamento o l,visto que começamos pela posição 0(V) */

const numbers = (['Red,Brown,Black'])
    for(let position of numbers) {
        console.log(position[3]);
    }