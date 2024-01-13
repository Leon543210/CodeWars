/*
    Title: Convert a Boolean to a String

    Description: 

        Implement a function which convert the given boolean value into its string representation.

        Note: Only valid inputs will be given.

    Source: https://www.codewars.com/kata/551b4501ac0447318f0009cd/javascript
*/


function boolToString(b){
    if(b == true){
        return 'true'
    }else if(b == false){
        return 'false'
    }
}

function boolToStringTwo(b){
    return b ? 'true' : 'false';
}