function superbowlWin(array){
  //  let noWin = undefined
   const winningGame = array.find(game => game.result === 'W')
   if(winningGame){
       return winningGame.year
   }else{
       return undefined
   }
   
    
    //for(let item of array){
      //  if(item.result === 'W'){
            //return record.year
       // }
   // }
}

