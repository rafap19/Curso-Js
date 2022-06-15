/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!. */

RockPaperScissors = (firstPlayer,secondPlayer) => {

   let rps = ['Rock','Paper','Scissors']

   if(firstPlayer == rps[0] && secondPlayer == rps[0]){
    console.log('draw')
    
}else if(firstPlayer == rps[0] && secondPlayer == rps[1]){
    console.log(`Player 2 won`)
    
}else if(firstPlayer == rps[0] && secondPlayer == rps[2]){
    console.log(`Player 1 won`)
    
}else if(firstPlayer == rps[1] && secondPlayer == rps[1]){
    console.log('draw')
    
}else if(firstPlayer == rps[1] && secondPlayer == rps[2]){
    console.log(`Player 2 won`)
    
}else if(firstPlayer == rps[1] && secondPlayer == rps[0]){
    console.log(`Player 1 won`)
    
}else if(firstPlayer == rps[2] && secondPlayer == rps[2]){
     console.log('draw')
     
}else if(firstPlayer == rps[2] && secondPlayer == rps[0]){
    console.log(`Player 2 won`)
    
}else if(firstPlayer == rps[2] && secondPlayer == rps[1]){
    console.log(`Player 1 won`)
    
}else if(secondPlayer == rps[0] && firstPlayer == rps[0]){
    console.log('draw')
    
}else if(secondPlayer == rps[0] && firstPlayer == rps[1]){
    console.log(`Player 1 won`)
    
}else if(secondPlayer == rps[0] && firstPlayer == rps[2]){
    console.log(`Player 2 won`)
    
}else if(secondPlayer == rps[1] && firstPlayer == rps[1]){
    console.log('draw')
    
}else if(secondPlayer == rps[1] && firstPlayer == rps[2]){
    console.log(`Player 1 won`)
    
}else if(secondPlayer == rps[1] && firstPlayer == rps[0]){
    console.log(`Player 2 won`)
    
}else if(secondPlayer == rps[2] && firstPlayer == rps[2]){
     console.log('draw')
     
}else if(secondPlayer == rps[2] && firstPlayer == rps[0]){
    console.log(`Player 1 won`)
    
}else if(secondPlayer == rps[2] && firstPlayer == rps[1]){
    console.log(`Player 2 won`)
    
}else{
    console.log(false)
    }

}

/*['Rock','Paper','Scissors'] */
RockPaperScissors('Rock','Paper')

/*Realmente não encontrei outra alternativa senão os ifs aninhados */