let bt = document.querySelector('input#bt')
    bt.addEventListener('click',inverter)

    function inverter(){

        let n1 = Number(document.querySelector('input#n1').value);

        let n2 = Number(document.querySelector('input#n2').value);

        alert(`Antes:
          O primeiro número era igual á : ${n1}
          O segundo número era igual á : ${n2}
            
          Invertido:
          O primeiro número é igual á : ${n2}
          O segundo número é igual á : ${n1}`)


    }