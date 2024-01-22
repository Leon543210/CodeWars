/*
    Title: Grasshopper - Grade book

    Description:
    Complete the function so that it finds the average of the three scores passed to it and returns the letter value 
        associated with that grade.

    Numerical Score	Letter Grade
        90 <= score <= 100	'A'
        80 <= score < 90	'B'
        70 <= score < 80	'C'
        60 <= score < 70	'D'
        0 <= score < 60	'F'
    Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

    Source: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/javascripts
*/

function grade(a, b, c){
    let result = (s1 + s2 + s3) / 3;

    if(result >= 90 && result <= 100){
        return 'A'
    }
    else if(result >= 80 && result < 90){
        return 'B'
    }
    else if(result >= 70 && result < 80){
        return 'C'
    }
    else if(result >= 60 && result < 70){
        return 'D'
    }
    else if(result >= 0 && result < 60){
        return 'F'
    }
}

/*
    Notes:
    -Could have also used ternary operator, for each 'grade' and result comparison respectively
    -could have used .reduce with result comparison (90/80/70/60), 
        though dependent on language used as this solution used "...arr" as parameter
*/