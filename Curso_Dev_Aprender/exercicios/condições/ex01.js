/*exercicios switch*/

let pessoa = 'idoso';

switch (pessoa) {
    
    case 'adolescente' : console.log('Voto Não Obrigatório')
            break;

    case 'adulto' : console.log('Voto Obrigatório');
            break;
    
    case 'idoso' : console.log ('Inapto para Votar')
            break;
    
    default : console.log('Valor não encontrado')
    
}