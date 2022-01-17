let btmaior = document.querySelector('input#btmaior');
    btmaior.addEventListener('click',Maior);

        function Maior(){
            let n1 = Number(document.querySelector('input#n1').value);

            let n2 = Number(document.querySelector('input#n2').value);

            let n3 = Number(document.querySelector('input#n3').value);

            let maior = n1;

                if(n2 > maior && n2 > n3)
                   maior = n2;

                else if (n3 > maior && n3 > n2)
                    maior = n3;

                else
                    maior = n1;

                    alert(`O valor maior é igual á: ${maior}`);
    
        }

        let btmenor = document.querySelector('input#btmenor');
            btmenor.addEventListener('click',Menor);

            function Menor(){
                var n1 = parseFloat(document.getElementById("n1").value);
                var n2 = parseFloat(document.getElementById("n2").value);
                var n3 = parseFloat(document.getElementById("n3").value);
         
                var menor = num1;
         
                if(n2 < menor)
                 menor = n2;
                if(n3 < menor)
                 menor = n3;
         
                alert("Menor: "+menor);
               }
                
                    
                