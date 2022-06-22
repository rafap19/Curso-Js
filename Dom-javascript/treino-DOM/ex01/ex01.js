/*Mudando a cor do body,temos 3 formas,utilizando o eventlistener,com arrowFunction ou com function declaration */

const openButton = document.getElementById('bt')
const bodyColor = document.querySelector('body')
const changeBodyColor = openButton.onclick = () =>{
    bodyColor.classList.add('bodyColor')
}

const changeBodyColor2 = openButton.ondblclick = () =>{
    bodyColor.classList.add('bodyColor2')
}





    







