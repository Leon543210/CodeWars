/* Attempted Solution #1

var countSheep = function (num){
    let count = 0;

    while(count < num){
        count++
        console.log(`${count} sheep...`);
        
    }
    return '';
  }
  */

  /* Attempted Solution #2

  var countSheep = function (num){
    let sheep = num + ' sheep...'
    
    for(let i = 0; i < num; i++){
      sheep += num;
      
      if(num == 0){
        return ''
      }
      else{
        return sheep
      }
    }

  */

    /* Correct Solution */

    var countSheep = function (num){
        let sheepTrack = "";
        let sheep = "sheep"
        for(let i = 1; i <= num; i++) 
        { 
            sheepTrack += `${i} sheep...`; 
        }
        console.log(sheep.toUpperCase())
        return sheepTrack
      }