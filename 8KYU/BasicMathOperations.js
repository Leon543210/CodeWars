

function mathOps(a, num1, num2){
    let result;
    if(a == "+"){
        result = num1 + num2;
        return result;
    }
    else if(a == "-"){
        result = num1 - num2;
        return result;
    }
    else if(a == "*"){
        result = num1 * num2;
        return result;
    }
    else if(a == "/"){
        result = num1 / num2;
        return result;
    }
}