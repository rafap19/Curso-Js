let bt = document.querySelector('input#bt');
bt.addEventListener('click',calcular);

function calcular(){
  let nota1 = parseFloat(document.getElementById("nota1").value);
   let nota2 = parseFloat(document.getElementById("nota2").value);

  let media = (nota1 + nota2)/2 

   if(media >= 7 && media <= 10){
      alert("Parabens, aprovado! Media "+media)
   }else{
      alert("Reprovado!")
   }
 
    }