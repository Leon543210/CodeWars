/*
    Title: What is between?

    Description: Complete the function that takes two integers (a, b, where a < b) and 
                 return an array of all integers between the input parameters, including them.

    Source: https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript
*/

function between(a,b){
    let arr = [];
    for(let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
  } 