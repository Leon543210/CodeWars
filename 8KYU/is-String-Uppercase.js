/*
    Title: Small enough? - Beginner

    Description:
        Task
        Create a method to see whether the string is ALL CAPS.

        In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter
        so any string containing no letters at all is trivially considered to be in ALL CAPS.

        Source: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
*/


let inputOne = 'test'
let inputTwo = inputOne.toUpperCase();

function upper(inputOne){
    //console.log(inputTwo.toUpperCase())

    if(inputOne !== inputTwo){
        return false;
    }else{
        return true;
    }
}