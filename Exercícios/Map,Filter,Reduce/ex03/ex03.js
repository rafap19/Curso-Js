/* uso de map e filter juntos */

const numeros = [2, 3, 6, 5, 10];
let novoArrayNumeros = []

const numerosFiltrados = numeros.filter(numero => numero % 2 === 0);

 console.log('numerosFiltrados', numerosFiltrados);


const arrayMapFilter = numeros
  .filter(numero => numero % 2 === 0)
  .map(numero => numero * 2);
