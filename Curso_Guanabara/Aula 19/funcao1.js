function parimpar(n) {
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(3)
    console.log(res)

//Ou console.log(parimpar(3))

/*
    Funções são ações executadas assim que são chamadas ou em decorrência de algum evento,uma função pode receber parâmetros e retornar um resultado.

    Toda função pode ter os seguintes fatores: uma chamada,um conjunto de parâmetros,uma ação e um ou mais retornos

    No caso acima, a função parimpar ao ser chamada pelo parâmetro (parimpar(3)),que ao ser criada substituirá o valor de n de parimpar pelo valor entre parênteses,no caso o 3.Quando isso ocorrer  vai ser disparado a ação de dividir o valor de n(no caso 3) por 2 e caso o resto dessa divisão tenha por resultado 0 o valor será par,caso contrário será ímpar!



*/



