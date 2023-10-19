
let numTwo = 1;
let numThree = 2;

var summation = function (num){

    while(num >= numThree){
        numTwo = numTwo + numThree;
        console.log(numTwo);
        console.log(`this is numThree currently: ${numThree}`);
        numThree++;
    }
    
}

