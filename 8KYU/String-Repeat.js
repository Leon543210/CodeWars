/*
    Write a function that accepts an integer n and a string s as parameters, 
    and returns a string of s repeated exactly n times.

    Link to Challenge: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
*/

function repeatString(n, s){
    let repString = '';

    for(let i = 0; i < n; i++){
        repString += s;
    }

    return repString;
}