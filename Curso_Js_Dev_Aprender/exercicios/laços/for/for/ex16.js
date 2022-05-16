/*Calcule o fatorial de um número*/

let num = 4

let fatorial = num 

calculafatorial = () => {

    for(cont = 1; cont < num; cont++) {

        fatorial = fatorial * (num - cont)
    }

    return fatorial

}



console.log(calculafatorial())

