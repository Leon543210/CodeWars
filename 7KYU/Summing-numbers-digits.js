/*
    Title: Summing a number's digits

    Description: 
            
        Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

        For example: (Input --> Output)

            10 --> 1
            99 --> 18
            -32 --> 5
        Let's assume that all numbers in the input will be integer values.

    Source: https://www.codewars.com/kata/52f3149496de55aded000410/javascript
*/


function sumOfDigits(number){
    let num = Math.abs(number).toString();
    
    let numArr = []
    let result = 0;
    for(let i = 0; i < num.length; i++){
        let placement = parseInt(num[i], 10)
        numArr.push(Math.abs(placement))
        result += placement
    }

    return result;
}

