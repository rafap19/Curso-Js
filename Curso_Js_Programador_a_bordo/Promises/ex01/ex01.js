/*O javascript é uma linguagem síncrona,isso significa que o js executa os códigos de maneira sequêncial, logo se eu crio 2 funções uma abaixo da outra primeiro ele executa a função de cima e depois executa a que estiver abaixo. No entanto existem métodos js como o "setTimeout" que são assíncronos,isso é eles não são executados de maneira sequencial.

Exemplo para um melhor entendimento da importância das promisses.

se eu crio 3 funções,sendo que a primeira e a última são comuns e a segunda que está entre eles está utilizando um método assíncrono,dentro das funções de acordo com as posições escrevemos: primeiro,segundo e terceiro. Se executarmos esse código no console a resposta será primeiro,terceiro,segundo e não primeiro,segundo e terceiro, isso porque um método assíncrono não vai executar de maneira sequencial.
*/
const MyPromisse = new Promise((resolve,reject)=>{

    const name = 'Rafael'
        if(name === 'Rafael'){
            resolve('Usuário Encontrado')
        }else{
            reject('Usuário Não Encontrado!')
        }
}).then((resolvAnswer)=>{
    console.log(resolvAnswer)
}).catch((catchAnswer)=>{
    console.log(catchAnswer)
})

//Após criar a promisse precisamos utilizar o método then para executá-la,dentro do mesmo colocamos dentro de uma arrow function um argumento qualquer que irá representar o dado da nossa promisse,esse dado que será exibido no  console será a nossa resposta(resolve),utilizamos o catch para armazenar o dado do conteúdo do reject,por fim ainda podemos colocar vários "then"


//Resolvendo várias promises utilizando o método Promisse.all([promise1,promise2,promise3]).then((answer)=>{})  que recebe como parâmetro um array aonde serparamos cada promise por vírgula,depois colocamos um then com o parâmetro que irá dar a nossa resposta

const nome = new Promise((resolve,reject)=>{
    resolve('Rafael')
})
    

const idade = new Promise((resolve,reject)=>{
    resolve(22)
})

const profissao = new Promise((resolve,reject)=>{
    resolve('Front-End Developer')
})


const LOGIN = Promise.all([nome,idade,profissao]).then((user)=>{
    console.log(user)
})



//Podemos utilizar também o método race para fazer o mesmo,a diferença é que ele considera qual promisse veio primeiro e executa apenas aquela que vier primeiro.


const LOGIN2 = Promise.race([nome,idade,profissao]).then((user)=>{
    console.log(user)
})






