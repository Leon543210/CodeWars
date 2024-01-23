/* 
    Title: Simple multiplication

    Description:

        This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

    Source: https://www.codewars.com/kata/583710ccaa6717322c000105/javascript
*/

function eightOrNine(n){
    //Solution One 
    // if(n % 2 === 0){
    //     return n * 8
    // }
    // else{
    //     return n * 9;
    // }

    //Solution Two
    return n % 2 === 0 ? n * 8 : n * 9;
}