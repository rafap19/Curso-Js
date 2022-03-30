let bt = document.querySelector('input#bt')
    bt.addEventListener('click',calcular)

    function calcular(){

        let n1 = Number(document.querySelector('input#n1').value);

        let n2 = Number(document.querySelector('input#n2').value);

        let n3 = Number(document.querySelector('input#n3').value);

        let maior = n1;
            if(n2 > maior && n2 > n3){
                maior = n2

            }else if(n3 > maior && n3 > n2){
                maior = n3

            }else{
                maior = n1
                alert(`O valor maior é :${maior}`)
            }        
        }
                