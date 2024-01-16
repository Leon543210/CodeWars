/*
    Title: Multiplication table for number

    Description:
        Your goal is to return multiplication table for number that is always an integer from 1 to 10.

        P. S. You can use \n in string to jump to the next line.

        Note: newlines should be added between rows, but there should be no trailing newline at the end. 
            If you're unsure about the format, look at the sample tests.

    Source: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/javascript
*/

function multTable(number){
    let tracker = []
    for(let i = 1; i <= 10; i++){
        let result = i * number;
        tracker.push(`${i} * ${number} = ${result}`)
         
    }return tracker.join('\n');
}