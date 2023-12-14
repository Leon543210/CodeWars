//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
    let result = 0;
    
    for(i = 0; i < array.length; i++){
      
        result += array[i]
  }
    let average = result / array.length;
      if(array.length === 0){
        return 0;
      }
      else{
            
            return average
        }
  }


// Past Attempt
// function findAverage(array) {
//     let result = 0;
    
//     for(i = 0; i < array.length; i++){
//       let x;
//         array.forEach((x, i) => result = result + x);
//         x = result / array.length;
//       if(x == '' || result == undefined || result == NaN || x == 0){
//         return 0;
//       }
//       else{
//         {
            
//             return result
//         }
//       }
//     }
//   }