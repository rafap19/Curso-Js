/*O javascript é uma linguagem síncrona,isso significa que o js executa os códigos de maneira sequêncial, logo se eu crio 2 funções uma abaixo da outra primeiro ele executa a função de cima e depois executa a que estiver abaixo. No entanto existem métodos js como o "setTimeout" que são assíncronos,isso é eles não são executados de maneira sequencial.

Exemplo para um melhor entendimento da importância das promisses.

se eu crio 3 funções,sendo que a primeira e a última são comuns e a segunda que está entre eles está utilizando um método assíncrono,dentro das funções de acordo com as posições escrevemos: primeiro,segundo e terceiro. Se executarmos esse código no console a resposta será primeiro,terceiro,segundo e não primeiro,segundo e terceiro, isso porque um método assíncrono não vai executar de maneira sequencial.
*/



