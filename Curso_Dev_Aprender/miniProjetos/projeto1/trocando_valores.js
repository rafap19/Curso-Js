/*troque os valores imprimidos, ao invés de vermelho e azul tem que aparecer azul e vermelho */


/*forma simples utilizei array para resolver

let a = 'vermelho';
let b = 'azul';
let ba = [a,b];

console.log(ba[1]);
console.log(ba[0]);

 */

/*Forma mais elaborada para exibir na web */

let red = document.querySelector('div#red')
let blue = document.querySelector('div#blue')
let finalResult = document.querySelector('input#bt')
finalResult.addEventListener('click',invertBlockAndContent)

function invertContent() {


    if (red.textContent === 'Red')  {
        red.innerHTML = `Blue`
    }else {
        red.innerHTML = `Red`
    }



    if (blue.textContent === 'Blue') {
        blue.innerHTML = `Red`
    }else {
        blue.innerHTML = `Blue`
    }


   

    
}
 










