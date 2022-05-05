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

function invertBlockAndContent() {

    if (red.textContent === 'Red' && blue.textContent === 'Blue')  {
        red.innerHTML = `Blue`
        red = document.querySelector('div#red').style.background = 'blue'
        blue.innerHTML = `Red`
        blue = document.querySelector('div#blue').style.background = 'red'

    }else {
        red.innerHTML = `Blue`
        red = document.querySelector('div#red').style.background = 'Blue'
        blue.innerHTML = `Red`
        blue = document.querySelector('div#blue').style.background = 'Red'
    }

    
}
 










