/*
    Title: Invert Values
    
    Description:
        Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

            invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
            invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
            invert([]) == []
        You can assume that all values are integers. Do not mutate the input array/list.

    Source: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript
*/

function invert(num){
    //num = []
    for(let i = 0; i < num.length; i++){
        num[i] *= -1
        console.log(num[i])
    }
    console.log(num)
    return num
    
}

//Additional Possible Solutions [From solutions]
// arrow function and map : array => array.map(num => -num)
// arrow function, map, and ternary : return array.map(x=>x === 0 ? x: -x)