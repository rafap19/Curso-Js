function clicar(){
 let n1 = Number(document.querySelector('input#n1').value);
 let n2 = Number(document.querySelector('input#n2').value);
 let n3 = Number(document.querySelector('input#n3').value);
 
 let maior = n1

        if(n2 > n1 && n2 > n3){
            maior = n2;
        }else if(n3 > n1 && n3 > n2){
            maior = n3;
        }else{
            maior = n1;
        }
        alert(`A ordem decrescente é : ${maior}`); 
        
              
}